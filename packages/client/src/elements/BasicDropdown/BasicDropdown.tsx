import React from 'react';

import { Dropdown, DropdownProps } from 'semantic-ui-react';

type DropdownOption = {
  key: string;
  text: string;
  value: string | number;
};

type BasicDropdownProps = {
  id: string;
  placeholder: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
};

export const BasicDropdown: React.FC<BasicDropdownProps> = ({
  id,
  placeholder,
  options,
  onChange
}) => {
  return (
    <Dropdown
      id={id}
      aria-labelledby={id}
      labeled
      search
      selection
      placeholder={placeholder}
      options={options}
      onChange={(_, data) => onChange(data.value as string)}
    />
  );
};
