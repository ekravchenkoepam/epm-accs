import React from 'react';

import { Dropdown, DropdownProps } from "semantic-ui-react";

type DropdownOption = {
  key: string;
  text: string;
  value: string | number;
};

type BasicDropdownProps = {
  placeholder: string;
  options: DropdownOption[];
  onChange?: (e: React.SyntheticEvent, data: DropdownProps) => void;
};

export const BasicDropdown: React.FC<BasicDropdownProps> = ({
  placeholder,
  options,
}) => {
  return (
    <Dropdown
      search
      selection
      placeholder={placeholder}
      options={options}
    />
  );
};
