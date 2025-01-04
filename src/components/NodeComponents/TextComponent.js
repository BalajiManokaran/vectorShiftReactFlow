import React, { useState } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { InputField } from "../shared/InputField";

export const TextComponent = ({ id, data, onInputsChange = () => null }) => {
  const [content, setContent] = useState("");
  const updateNodeInternals = useUpdateNodeInternals();

  const parseContent = (text) => {
    const parts = text.split(/(\{\{.*?\}\})/g);
    return parts.map((part, index) =>
      part.startsWith("{{") && part.endsWith("}}")
        ? { type: "placeholder", content: part.slice(2, -2), key: index }
        : { type: "text", content: part, key: index }
    );
  };

  const handleInput = (e) => {
    const inputText = e.target.value;
    setContent(inputText);

    const structuredContent = parseContent(inputText);
    const placeholders = structuredContent
      .filter((item) => item.type === "placeholder")
      .map((item) => item.content);

    onInputsChange({ inputs: placeholders });
    updateNodeInternals(id);
  };

  return (
    <InputField
      id="outlined-multiline-flexible"
      label="Text"
      value={content}
      handleChange={(e) => handleInput(e)}
      multiline={true}
      maxRows={10}
    />
  );
};
