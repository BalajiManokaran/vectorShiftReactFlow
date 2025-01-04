import { useState } from "react";
import { Dropdown } from "../shared/Dropdown";

const options = [
  {
    name: "PDF",
  },
  {
    name: "TEXT",
  },
  {
    name: "DOCX",
  },
];

export const TextToFileComponent = ({
  ddValue = {
    name: "PDF",
  },
}) => {
  const [dropdownValue, setDropdownValue] = useState(ddValue);

  const handleChange = (value) => {
    if (value) {
      setDropdownValue(value);
    }
  };

  return (
    <Dropdown
      value={dropdownValue}
      options={options}
      handleChange={handleChange}
      label={"File Type"}
    />
  );
};
