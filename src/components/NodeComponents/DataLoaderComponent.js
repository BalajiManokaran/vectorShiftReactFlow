import { Typography } from "@mui/material";
import React from "react";

export const DataLoaderComponent = ({ label = "", description = "" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "40px" }}>
        {label}
      </Typography>
      <Typography variant="h6">{description}</Typography>
    </div>
  );
};
