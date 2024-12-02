import React from 'react';
import { Form, FormField } from "semantic-ui-react";

import { GroupLabel } from "../../elements/GroupLabel";

import styles from './InputButtonGroup.module.css';

type RadioButtonGroupProps = {
  label: string;
  options: string[];
  sectionType: string;
  infoText?: string;
  isTextInput?: boolean;
  ButtonComponent: React.ElementType;
}

export const InputButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  options,
  sectionType,
  infoText,
  isTextInput,
  ButtonComponent
}) => {
  const getAdditionalProps = (option: string) => {
    if (isTextInput) {
      return { type: 'text', placeholder: option };
    }

    return { checked: false };
  };

  return (
    <Form>
      <FormField className={styles.radioGroupContainer}>
        <GroupLabel
          sectionType={sectionType}
          text={label}
          infoText={infoText}
          hasInfoHint
        />

        {options && options.map((option) => (
          <ButtonComponent
            key={option}
            label={option}
            name={sectionType}
            value={option}
            onChange={() => {}}
            {...getAdditionalProps(option)}
          />
        ))}
      </FormField>
    </Form>
  );
};
