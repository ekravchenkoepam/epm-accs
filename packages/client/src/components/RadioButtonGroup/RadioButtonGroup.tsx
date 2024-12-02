import React from 'react';
import { Form, FormField } from "semantic-ui-react";

import { GroupLabel } from "../../elements/GroupLabel";
import { RadioButton } from "../../elements/RadioButton";

import styles from './RadioButtonGroup.module.css';

type RadioButtonGroupProps = {
  label: string;
  options: string[];
  sectionType: string;
  infoText?: string;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  options,
  sectionType,
  infoText
}) => {
  return (
    <Form>
      <FormField className={styles.radioGroupContainer}>
        <GroupLabel
          sectionType={sectionType}
          text={label}
          infoText={infoText}
          hasInfoHint
        />

        {options && options.map((standard) => (
          <RadioButton
            key={standard}
            label={standard}
            name={sectionType}
            value={standard}
            checked={true}
            onChange={() => {}}
          />
        ))}
      </FormField>
    </Form>
  );
};
