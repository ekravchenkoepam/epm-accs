import React from 'react';
import { useFormikContext } from "formik";

import { Radio } from 'semantic-ui-react'
import { InputProps } from "../types/InputProps";

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
  const { setFieldValue, submitForm } = useFormikContext<any>(); // Access Formik context

  const inputId = `radio-${value}`;

  const handleChange = async (_: React.FormEvent<HTMLInputElement>, data: any) => {
    const newValue = data.value as string;

    onChange(newValue)
    await setFieldValue(name, newValue);
    await submitForm()
  };

  return (
    <Radio
      id={inputId}
      label={<label htmlFor={inputId}>{label}</label>}
      name={name}
      value={value}
      checked={checked}
      onChange={handleChange}
    />
  );
};
