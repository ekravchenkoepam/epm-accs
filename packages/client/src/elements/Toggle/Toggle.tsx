import React from 'react';

import { Checkbox } from 'semantic-ui-react'

import styles from './Toggle.module.css'

type ToggleProps = {
  labelText?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ labelText }) => {
  const inputId = `toggle-${labelText}`;

  return (
    <div className={styles.toggleContainer}>
      <Checkbox toggle id={inputId} />
      <label htmlFor={inputId}>{labelText}</label>
    </div>
  );
};
