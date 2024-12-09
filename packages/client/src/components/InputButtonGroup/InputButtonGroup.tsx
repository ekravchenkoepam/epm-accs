import React, {useContext} from 'react';

import { GroupLabel } from '../../elements/GroupLabel';
import { CalculationProvider } from '../../pages/Calculation/CalculationProvider';

import styles from './InputButtonGroup.module.css';

type InputType = 'labeled' | 'number' | 'radio' | 'single-checkbox' | 'multi-checkbox';

type RadioButtonGroupProps = {
  label?: string;
  placeholder?: string | number;
  options: string[];
  sectionType: string;
  subSectionType: string;
  infoText?: string;
  action?: string;
  selectedValue?: string | number;
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
  selectedValue,
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
      case 'single-checkbox':
        return { type: 'checkbox', checked: inputValue };
      case 'multi-checkbox':
        return { type: 'checkbox', checked: inputValue?.includes(option) };
      default:
        return {};
    }
  };

  const handleChange = (data: any) => {
    let newSelectedValues;

    switch (inputType) {
      case 'radio':
        newSelectedValues = data;
        break;

      case 'multi-checkbox':
        if (inputValue.includes(data)) {
          newSelectedValues = inputValue.filter((value: any) => value !== data); // If checked, remove it
        } else {
          newSelectedValues = [...inputValue, data];
        }
        break;

      case 'single-checkbox':
        newSelectedValues = !inputValue;
        break;

      case 'number':
      case 'labeled':
        newSelectedValues = data;
        break;

      default:
        newSelectedValues = data;
        break;
    }

    updateFormState(sectionType, {
      [subSectionType]: newSelectedValues,
    });
  };

  const getSelectedValue = (option: any) => (selectedValue ?
    selectedValue :
    (!placeholder ? option : null)
  )

  return (
    <div className={styles.radioGroupContainer}>
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
          name={subSectionType}
          value={getSelectedValue(option)}
          onChange={(data: any) => handleChange(data)}
          {...getAdditionalProps(option)}
        />
      ))}
    </div>
  );
};
