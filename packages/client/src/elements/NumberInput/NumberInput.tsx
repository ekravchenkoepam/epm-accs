import React from 'react';

import { Input } from 'semantic-ui-react'
import { InputProps } from "../types/InputProps";

type NumberInputProps =  InputProps & {
  label: string;
  placeholder: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  label
}) => {
  return (
    <Input
      type="number"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(_, data) => onChange(data.value as string)}
    />
  );
};
