import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#bbbcf9",
      light: "#ffcf4b",
      dark: "#27ae60",
    },
    secondary: {
      main: "#f9f9f9",
      light: "#f9f9f9",
      dark: "#cec6c6",
    },
    text: {
      primary: "#263238",
      secondary: "#65624c",
    },
  },
  typography: {
    fontFamily: "Inter",
    h5: {
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "5b5252",
    },
    h6: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "5b5252",
    },
  },
});
