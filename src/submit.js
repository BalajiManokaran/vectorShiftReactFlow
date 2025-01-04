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

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [apiResult, setApiResult] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/pipelines/parse",
      headers: {
        "Content-Type": "application/json",
      },
      data: { nodes, edges },
    };

    const result = await axios
      .request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
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
              <Typography>
                Number of Nodes : {apiResult?.num_nodes}
                <br />
                Number of Edges : {apiResult?.num_edges}
                <br />
                DAG Status : {apiResult?.is_dag ? "True" : "False"}
              </Typography>
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
