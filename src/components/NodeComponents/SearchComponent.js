import { useState } from "react";
import { Dropdown } from "../shared/Dropdown";
import { Typography } from "@mui/material";

const options = [
  {
    name: "openai/text-embedding-3-small",
  },
  {
    name: "openai/text-embedding-3-large",
  },
  {
    name: "cohere/embed-english-v3.0",
  },
  {
    name: "cohere/embed-multilingual-v3.0",
  },
];

export const SearchComponent = ({
  ddValue = { name: "openai/text-embedding-3-large" },
}) => {
  const [dropdownValue, setDropdownValue] = useState(ddValue);

  const handleChange = (value) => {
    if (value) {
      setDropdownValue(value);
    }
  };

  return (
    <>
      <Dropdown
        value={dropdownValue}
        options={options}
        handleChange={handleChange}
        label={"Model"}
      />
      <Typography variant="h6">
        Generates a temporary VectorDB to query from.
      </Typography>
    </>
  );
};
