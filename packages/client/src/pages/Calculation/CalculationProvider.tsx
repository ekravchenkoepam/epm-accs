import { createContext } from 'react';

type FormContextType = {
  formState: any;
  updateFormState: (section: string, value: { [p: string]: any }) => void;
  onCalculate: () => void;
};

const defaultContextValue: FormContextType = {
  formState: {},
  updateFormState: () => {},
  onCalculate: () => {},
}

export const CalculationProvider = createContext(defaultContextValue)
