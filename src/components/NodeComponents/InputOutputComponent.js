import { useState } from "react";
import { Dropdown } from "../shared/Dropdown";
import { InputField } from "../shared/InputField";

export const InputOutputComponent = ({ id, data, ddValue = null }) => {
  const [values, setValues] = useState({
    textValue: id.includes("customInput-")
      ? id.replace("customInput-", "input_")
      : id.replace("customOutput-", "output_"),
    dropdownValue: ddValue,
  });

  const options = id.includes("customInput-")
    ? [
        {
          name: "Text",
        },
        {
          name: "File",
        },
        {
          name: "Audio",
        },
      ]
    : [
        {
          name: "Text",
        },
        {
          name: "Image",
        },
        {
          name: "Formatted Text",
        },
        {
          name: "Audio",
        },
        {
          name: "JSON",
        },
        {
          name: "File",
        },
      ];

  const handleChange = (value) => {
    if (value) {
      setValues({ ...values, dropdownValue: value });
    }
  };

  return (
    <>
      <InputField
        id="outlined-multiline-flexible"
        label="Field Name"
        value={values?.textValue}
        handleChange={(e) =>
          setValues({ ...values, textValue: e.target.value })
        }
        multiline={false}
        maxRows={1}
      />
      <Dropdown
        value={values?.dropdownValue}
        options={options}
        handleChange={handleChange}
        label={"Type"}
      />
    </>
  );
};
