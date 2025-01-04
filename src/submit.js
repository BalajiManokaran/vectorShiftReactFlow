// submit.js

import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import {
  alertBoxStyle,
  loaderContainerStyle,
  modalBoxStyle,
  submitButtonStyle,
  submitContainerStyle,
} from "./styles/styles";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { config } from "./utils/config";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [apiResult, setApiResult] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async () => {
    let requestData = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${config.api_base_url}/pipelines/parse`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { nodes, edges },
      timeout: 30000,
    };

    const result = await axios
      .request(requestData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          setApiResult({ error: "Request timeout. Please try again." });
        } else {
          setApiResult({
            error: error?.message ? error?.message : "Error Occurred",
          });
        }
        return null;
      });

    if (result) {
      setApiResult(result);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setApiResult(null);
  };

  return (
    <Box sx={submitContainerStyle}>
      <Button
        type="submit"
        onClick={() => {
          setOpenModal(true);
          handleSubmit();
        }}
        sx={submitButtonStyle}
      >
        Submit
      </Button>
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={modalBoxStyle}>
          <Tooltip title="Close">
            <IconButton sx={alertBoxStyle} onClick={handleClose}>
              <CloseIcon sx={{ width: 15 }} />
            </IconButton>
          </Tooltip>
          {apiResult ? (
            <Alert severity={apiResult?.is_dag ? "success" : "error"}>
              {apiResult?.error ? (
                <Typography>{apiResult?.error}</Typography>
              ) : (
                <Typography>
                  Number of Nodes : {apiResult?.num_nodes}
                  <br />
                  Number of Edges : {apiResult?.num_edges}
                  <br />
                  DAG Status : {apiResult?.is_dag ? "True" : "False"}
                </Typography>
              )}
            </Alert>
          ) : (
            <Box sx={loaderContainerStyle}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};
