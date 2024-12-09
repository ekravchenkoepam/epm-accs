import React from 'react';
import InputMask from 'react-input-mask';

import { Input } from 'semantic-ui-react';
import { InputProps } from '../types/InputProps';

import styles from './LabeledInput.module.css'

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
      <InputMask
        mask="9.9"
        maskPlaceholder="0.0"
        value={value}
        onChange={handleChange}
      >
        {(inputProps) => (
          <Input
            {...inputProps}
            action={action}
            placeholder={placeholder}
            className={styles.labeledInput}
          />
        )}
      </InputMask>
    </div>
  );
};
