import React from 'react';

import { Input } from 'semantic-ui-react';
import { InputProps } from '../types/InputProps';

type LabeledInputProps = InputProps & {
  value: number;
  action: string;
  placeholder: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({
  action,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as string);
  };

  return (
    <div>
      <Input
        action={action}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
