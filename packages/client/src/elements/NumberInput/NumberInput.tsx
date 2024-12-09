import React from 'react';

import { Input } from 'semantic-ui-react'
import { InputProps } from '../types/InputProps';

import styles from './NumberInput.module.css'

type NumberInputProps =  InputProps & {
  label: string;
  placeholder: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^[0-9]*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <div>
      <Input
        type="number"
        min="0"
        className={styles.numberInput}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
