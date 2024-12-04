import React, {useContext} from 'react';
import { Form, FormField } from "semantic-ui-react";

import { GroupLabel } from "../../elements/GroupLabel";
import { CalculationProvider } from "../../pages/Calculation/CalculationProvider";

import styles from './InputButtonGroup.module.css';

type InputType = 'labeled' | 'number' | 'radio' | 'checkbox';

type RadioButtonGroupProps = {
  label?: string;
  placeholder?: string | number;
  options: string[];
  sectionType: string;
  subSectionType: string;
  infoText?: string;
  action?: string;
  inputType: InputType;
  ButtonComponent: React.ElementType;
}

export const InputButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  placeholder,
  options,
  sectionType,
  subSectionType,
  infoText,
  action,
  inputType,
  ButtonComponent
}) => {
  const { formState, updateFormState } = useContext(CalculationProvider)
  const inputValue = formState[sectionType]?.[subSectionType]

  const getAdditionalProps = (option: string | number) => {
    switch (inputType) {
      case 'labeled':
        return { label: option, placeholder, action };
      case 'number':
        return { type: 'number', placeholder };
      case 'radio':
        return { type: 'radio', checked: inputValue === option };
      case 'checkbox':
        return { type: 'checkbox', checked: inputValue?.includes(option) };
      default:
        return {};
    }
  };

  const handleChange = (option: any) => {
    let newSelectedValues;

    if (inputType === 'radio') {
      newSelectedValues = option;
    } else if (inputType === 'checkbox') {
      if (inputValue.includes(option)) {
        newSelectedValues = inputValue.filter((value: any) => value !== option);
      } else {
        newSelectedValues = [...inputValue, option];
      }
    }

    updateFormState(sectionType, {
      [subSectionType]: newSelectedValues
    });
  }

  return (
    <Form>
      <FormField className={styles.radioGroupContainer}>
        {label && (
          <GroupLabel
            text={label}
            infoText={infoText}
            hasInfoHint
          />
        )}

        {options && options.map((option) => (
          <ButtonComponent
            key={option}
            label={option}
            name={sectionType}
            value={!placeholder ? option : null}
            onChange={(data: any) => handleChange(data)}
            {...getAdditionalProps(option)}
          />
        ))}
      </FormField>
    </Form>
  );
};
