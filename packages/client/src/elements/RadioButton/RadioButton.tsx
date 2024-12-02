import React from 'react';

import { Radio } from 'semantic-ui-react'
import { InputProps } from "../types/InputProps";

import styles from './RadioButton.module.css'

export const RadioButton: React.FC<InputProps> = ({
  name,
  value,
  checked,
  onChange,
  label
}) => {
  return (
    <Radio
      className={styles.radioButton}
      label={label}
      name={name}
      value={value}
      checked={checked}
      onChange={(_, data) => onChange(data.value as string)}
    />
  );
};
