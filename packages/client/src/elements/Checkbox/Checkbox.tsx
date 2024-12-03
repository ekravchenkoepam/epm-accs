import React from 'react';
import { Checkbox } from 'semantic-ui-react';

import { InputProps } from "../types/InputProps";

type CheckboxButtonProps = InputProps & {
  checked: boolean;
  label: string;
};

export const CheckboxButton: React.FC<CheckboxButtonProps> = ({
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
