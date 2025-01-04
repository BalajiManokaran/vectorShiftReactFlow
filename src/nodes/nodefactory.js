import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const createNode = (
  label,
  inputs = [],
  outputs = [],
  style = {},
  Component = null,
  componentProps = {}
) => {
  return ({ id, data }) => {
    const [state, setState] = useState({ inputs, outputs });

    const onChange = (val) => {
      setState((prev) => ({ ...prev, ...val }));
    };

    return (
      <BaseNode
        id={id}
        data={data}
        label={label}
        inputs={state.inputs}
        outputs={state.outputs}
        style={style}
      >
        {Component ? (
          <Component
            {...componentProps}
            id={id}
            data={data}
            onInputsChange={onChange}
          />
        ) : null}
      </BaseNode>
    );
  };
};
