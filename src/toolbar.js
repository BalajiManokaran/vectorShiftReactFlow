// toolbar.js

import React from "react";
import { DraggableNode } from "./draggableNode";
import { NodesArray } from "./utils/constants";
import { toolbarContainerStyle, toolbarWrapperStyle } from "./styles/styles";
import { Box } from "@mui/material";

export const PipelineToolbar = () => {
  return (
    <Box sx={toolbarContainerStyle}>
      <Box sx={toolbarWrapperStyle}>
        {NodesArray.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <DraggableNode
                type={item?.type}
                label={item?.label}
                Component={item?.component}
              />
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};
