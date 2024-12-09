import React from 'react';
import { useFormikContext } from "formik";
import { FormValues } from "../../types";

import styles from './ErrorMessage.module.css'

type ErrorMessageProps = {
  sectionType: keyof FormValues;
  subSectionType: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ sectionType, subSectionType}) => {
  const { errors, touched } = useFormikContext<FormValues>();

  const error = (errors[sectionType] as Record<string, string>)?.[subSectionType];
  const isTouched = (touched[sectionType] as Record<string, boolean>)?.[subSectionType];

  if (error && isTouched) {
    return <p className={styles.errorMessage}>{error}</p>;
  }

  return null;
};
