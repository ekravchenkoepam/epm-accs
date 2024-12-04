import React from 'react';

import { Input } from 'semantic-ui-react';

type LabeledInputProps = {
  value: number;
  action: string;
  placeholder: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({ action, placeholder, value }) => {
  return (
    <div>
      <Input
        action={action}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
