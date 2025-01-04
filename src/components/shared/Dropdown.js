import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  containerStyle,
  fullWidth,
  labelStyle,
  textFieldStyle,
} from "../../styles/styles";

export const Dropdown = ({
  value,
  options = [],
  handleChange,
  label = "Actions",
}) => {
  const [open, setOpen] = useState(false);

  const handleDropdownChange = (event, value) => {
    if (value) {
      handleChange(value);
      setOpen(false);
    }
  };

  return (
    <div style={fullWidth}>
      <div style={containerStyle}>
        <p style={labelStyle}>{label}</p>
        <Autocomplete
          value={value}
          onChange={handleDropdownChange}
          options={options}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                "& .MuiOutlinedInput-root": textFieldStyle,
              }}
            />
          )}
          open={open}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          renderOption={(props, option) => (
            <div
              {...props}
              key={option.name}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: 0,
                width: "100%",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  margin: 0,
                  width: "100%",
                  fontSize: "13px",
                }}
              >
                {option.name}
              </p>
              {option.description && (
                <p
                  style={{
                    textAlign: "left",
                    margin: 0,
                    lineHeight: "1.2",
                    width: "100%",
                    fontSize: "12px",
                    color: "grey",
                  }}
                >
                  {option.description}
                </p>
              )}
            </div>
          )}
          ListboxProps={{
            style: {
              maxHeight: "200px",
              overflowY: "auto",
              scrollbarWidth: "thin",
            },
          }}
          sx={fullWidth}
        />
      </div>
    </div>
  );
};
