import { useState } from "react";
import { Dropdown } from "../shared/Dropdown";
import { InputField } from "../shared/InputField";

const Provideroptions = [
  {
    name: "OpenAI",
  },
  {
    name: "Stability AI",
  },
  {
    name: "Flux",
  },
];

const ModelOptions = [
  {
    name: "DALL.E 2",
  },
  {
    name: "DALL.E 3",
  },
];

const SizeOptions = [
  {
    name: "256x256",
  },
  {
    name: "512x512",
  },
  {
    name: "1024x1024",
  },
];

export const ImageGenerationComponent = ({
  providerValue = {
    name: "OpenAI",
  },
  modelValue = {
    name: "DALL.E 2",
  },
  sizeValue = {
    name: "256x256",
  },
  prompt = "",
  imageCount = 1,
}) => {
  const [dropdownValue, setDropdownValue] = useState({
    providerValue: providerValue,
    modelValue: modelValue,
    sizeValue: sizeValue,
  });
  const [text, setText] = useState({
    prompt: prompt,
    imageCount: imageCount,
  });

  return (
    <>
      <InputField
        id="outlined-multiline-flexible"
        label="Prompt"
        value={text.prompt ?? ""}
        handleChange={(e) => setText({ ...text, prompt: e.target.value })}
        multiline={true}
        maxRows={4}
      />
      <Dropdown
        value={dropdownValue?.providerValue}
        options={Provideroptions}
        handleChange={(value) =>
          setDropdownValue({ ...dropdownValue, providerValue: value })
        }
        label={"Provider"}
      />
      <Dropdown
        value={dropdownValue?.modelValue}
        options={ModelOptions}
        handleChange={(value) =>
          setDropdownValue({ ...dropdownValue, modelValue: value })
        }
        label={"Model"}
      />
      <Dropdown
        value={dropdownValue?.sizeValue}
        options={SizeOptions}
        handleChange={(value) =>
          setDropdownValue({ ...dropdownValue, sizeValue: value })
        }
        label={"Size"}
      />
      <InputField
        id="outlined-number"
        label="Image Count"
        value={text.imageCount}
        handleChange={(event) =>
          setText({ ...text, imageCount: event.target.value })
        }
        type="number"
      />
    </>
  );
};
