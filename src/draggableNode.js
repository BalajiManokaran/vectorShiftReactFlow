// draggableNode.js
import { Box } from "@mui/material";
import {
  draggableBoxStyle,
  draggableContainerlabelStyle,
  iconContainerStyle,
  iconStyle,
} from "./styles/styles";

export const DraggableNode = ({ type, label, Component }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Box
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      sx={draggableBoxStyle}
      draggable
    >
      <Box sx={iconContainerStyle}>
        <Component sx={iconStyle} />
      </Box>
      <span style={draggableContainerlabelStyle}>{label}</span>
    </Box>
  );
};
