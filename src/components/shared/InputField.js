import { TextField } from "@mui/material";
import React from "react";
import {
  containerStyle,
  fullWidth,
  labelStyle,
  textFieldStyle,
  textInputFontStyle,
} from "../../styles/styles";

export const InputField = ({
  id = "outlined-multiline-flexible",
  label = "Prompt",
  value = "",
  handleChange = () => null,
  multiline = false,
  maxRows = 4,
  type,
}) => {
  let InputStyleObj = multiline
    ? {
        minHeight: "35px",
        padding: "10px",
        ...textInputFontStyle,
      }
    : textFieldStyle;

  return (
    <div style={fullWidth}>
      <div style={containerStyle}>
        <p style={labelStyle}>{label}</p>
        <TextField
          id={id}
          value={value}
          onChange={handleChange}
          multiline={multiline}
          maxRows={maxRows}
          type={type}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": InputStyleObj,
          }}
          inputProps={{
            min: 0,
            step: 1,
          }}
        />
      </div>
    </div>
  );
};
