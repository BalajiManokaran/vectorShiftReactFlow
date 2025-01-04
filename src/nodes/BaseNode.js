import React from "react";
import { Handle, Position } from "reactflow";
import { Box } from "@mui/material";
import { handleStyles, handleTextStyles } from "../styles/styles";
import { NodesArray } from "../utils/constants";

export const BaseNode = ({
  id,
  data,
  label,
  inputs = [],
  outputs = [],
  style = {},
  children,
}) => {
  const Component = NodesArray.find(
    (item) => item.type === data?.nodeType
  )?.component;

  return (
    <Box
      sx={{
        width: 200,
        height: "auto",
        border: "2px solid #9293f1",
        borderRadius: "5px",
        backgroundColor: "#f5f9fb",
        padding: "15px",
        textAlign: "center",
        margin: "10px",
        "&:hover": {
          boxShadow: "0px 4px 12px 2px #9293f1",
        },
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          marginBottom: "10px",
        }}
      >
        <Component sx={{ width: "18px", color: "#4B5563" }} />
        <div
          style={{
            fontSize: "10px",
            fontWeight: 700,
            color: "#4B5563",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {label}
        </div>
      </div>

      {inputs.map((input, idx) => (
        <React.Fragment key={`${id}-input-${idx}`}>
          <Handle
            type="target"
            id={`input-${input}`}
            position={Position.Left}
            style={{
              top: `${((idx + 1) * 100) / (inputs.length + 1)}%`,
              left: "1.5px",
              ...handleStyles,
            }}
          />
          <div
            style={{
              top: `${((idx + 1) * 100) / (inputs.length + 1)}%`,
              left: "-85px",
              textAlign: "right",
              ...handleTextStyles,
            }}
          >
            {input}
          </div>
        </React.Fragment>
      ))}

      {outputs.map((output, idx) => (
        <React.Fragment key={`${id}-output-${idx}`}>
          <Handle
            type="source"
            id={`output-${output}`}
            position={Position.Right}
            style={{
              top: `${((idx + 1) * 100) / (outputs.length + 1)}%`,
              right: "1px",
              ...handleStyles,
            }}
          />
          <div
            style={{
              top: `${((idx + 1) * 100) / (outputs.length + 1)}%`,
              right: "-85px",
              textAlign: "left",
              ...handleTextStyles,
            }}
          >
            {output}
          </div>
        </React.Fragment>
      ))}

      {children}
    </Box>
  );
};
