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
    onChange(event.target.value as string);
  };

  return (
    <div>
      <Input
        type="number"
        className={styles.numberInput}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
