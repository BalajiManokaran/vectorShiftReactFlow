import { useState } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { Dropdown } from "../shared/Dropdown";

const options = [
  {
    name: "Create Email Draft",
    description: "Create (but do not send) a new email",
    inputs: ["subject", "recipient", "body"],
  },
  {
    name: "Send Email",
    description: "Create and Send a new email",
    inputs: ["subject", "recipient", "body"],
  },
  {
    name: "Draft Reply",
    description:
      "Create (but do not send) a draft of a reply to an existing email",
    inputs: ["recipient", "body", "email_id"],
  },
  {
    name: "Send Reply",
    description: "Create and Send a new reply to an existing email",
    inputs: ["recipient", "body", "email_id"],
  },
];

export const GmailComponent = ({
  id,
  data,
  ddValue = null,
  onInputsChange = () => null,
}) => {
  const [dropdownValue, setDropdownValue] = useState(ddValue);

  const updateNodeInternals = useUpdateNodeInternals();

  const handleChange = (value) => {
    if (value) {
      setDropdownValue(value);
      onInputsChange({ inputs: value?.inputs });
      updateNodeInternals(id);
    }
  };

  return (
    <Dropdown
      value={dropdownValue}
      options={options}
      handleChange={handleChange}
    />
  );
};
