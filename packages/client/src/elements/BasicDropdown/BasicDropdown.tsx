import React from 'react';

import { Dropdown } from 'semantic-ui-react';

import styles from './BasicDropdown.module.css'

type DropdownOption = {
  key: string;
  text: string;
  value: string | number;
};

type BasicDropdownProps = {
  id: string;
  placeholder: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
};

export const BasicDropdown: React.FC<BasicDropdownProps> = ({
  id,
  placeholder,
  options,
  value,
  onChange
}) => {
  return (
    <Dropdown
      labeled
      search
      selection
      id={id}
      aria-labelledby={id}
      placeholder={placeholder}
      options={options}
      value={value}
      className={styles.basicDropdown}
      onChange={(_, data) => onChange(data.value as string)}
    />
  );
};
