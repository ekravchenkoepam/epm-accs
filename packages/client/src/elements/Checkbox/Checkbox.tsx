import React from 'react';
import { Checkbox } from 'semantic-ui-react';

import { InputProps } from "../types/InputProps";

export const CheckboxButton: React.FC<InputProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  return (
    <Checkbox
      label={label}
      name={name}
      value={value}
      checked={checked}
      onChange={(_, data) => onChange(data.value as string)}
    />
  );
};
