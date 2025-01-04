export const fullWidth = {
  width: "100%",
};

export const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "0px 20px 10px 20px",
};

export const labelStyle = {
  margin: "0px 0px 5px 0px",
  fontSize: "10px",
  fontWeight: "400",
};

export const textInputFontStyle = {
  fontSize: "10px",
  fontWeight: 500,
  color: "#897474",
};

export const textFieldStyle = {
  height: "35px",
  ...textInputFontStyle,
};

export const handleStyles = {
  backgroundColor: "rgb(255, 255, 255)",
  position: "absolute",
  transition: "box-shadow 0.15s ease-in-out",
  boxSizing: "border-box",
  padding: "8px",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "#9293f1",
  borderRadius: "50%",
  cursor: "pointer",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 4px 2px",
  zIndex: 10,
};

export const handleTextStyles = {
  position: "absolute",
  fontSize: "15px",
  width: "75px",
  height: "25px",
  lineHeight: "25px",
  color: "rgb(146 147 241)",
};

// draggableNode.js File Styles
export const draggableBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  cursor: "grab",
  minWidth: "80px",
  height: "80px",
  border: "1px solid #d1d5db",
  borderRadius: "12px",
  backgroundColor: "#eef1f3",
  transition: "all 0.3s ease-in-out",
  boxShadow: "none",
  "&:hover": {
    border: "1px solid #4ad56a",
    boxShadow: "0 4px 8px rgba(74, 213, 106, 0.3)",
  },
};

export const iconContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
};

export const iconStyle = {
  fontSize: "24px",
  color: "#4B5563",
};

export const draggableContainerlabelStyle = {
  color: "#111827",
  fontSize: "10px",
  fontWeight: "700",
};

// submit.js File Styles
export const submitContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "rgba(1, 1, 1, 0.3) 0px -4px 6px",
  borderRadius: "12px 12px 0px 0px",
  height: "100%",
};

export const submitButtonStyle = {
  backgroundColor: "#6A5ACD",
  color: "#FFFFFF",
  margin: "20px",
  fontSize: "14px",
  padding: "12px 20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(106, 90, 205, 0.4)",
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    backgroundColor: "#5a4fb0",
    transform: "scale(1.05)",
    boxShadow: "0px 6px 12px rgba(106, 90, 205, 0.6)",
  },
};

export const modalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  bgcolor: "background.paper",
  alignContent: "center",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export const alertBoxStyle = {
  position: "absolute",
  top: 12,
  right: 15,
  zIndex: 1,
  bgcolor: "#a8a3a3",
  color: "white",
  width: 20,
  height: 20,
  borderRadius: "50%",
  "&:hover": {
    bgcolor: "grey.500",
  },
};

export const loaderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

// toolbar.js File Styles
export const toolbarContainerStyle = {
  padding: "10px",
  boxShadow: "rgba(1, 1, 1, 0.3) 0px 4px 6px",
  borderRadius: "0px 0px 12px 12px",
};

export const toolbarWrapperStyle = {
  margin: "20px 10px 10px 10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "10px",
};
