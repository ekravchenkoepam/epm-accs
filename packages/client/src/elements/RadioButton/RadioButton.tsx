import React from 'react';

import { Radio } from 'semantic-ui-react'
import { InputProps } from "../types/InputProps";

type RadioButtonProps = InputProps & {
  checked: boolean;
  label: string;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  label
}) => {
  const inputId = `radio-${value}`;

  return (
    <Radio
      id={inputId}
      label={<label htmlFor={inputId}>{label}</label>}
      name={name}
      value={value}
      checked={checked}
      onChange={(_, data) => onChange(data.value as string)}
    />
  );
};
