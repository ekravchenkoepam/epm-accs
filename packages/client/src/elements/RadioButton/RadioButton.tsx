import React from 'react';

import { Radio } from 'semantic-ui-react'
import { InputProps } from "../types/InputProps";

import styles from './RadioButton.module.css'

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
