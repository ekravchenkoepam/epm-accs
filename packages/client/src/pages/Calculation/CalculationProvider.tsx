import { createContext } from 'react';

type FormContextType = {
  formState: any;
  updateFormState: (section: string, value: { [p: string]: any }) => void;
  updateConfiguration: (selectedApplication: string, selectedChips: Record<string, string[]>) => void;
  onCalculate: (values: any) => void;
};

const defaultContextValue: FormContextType = {
  formState: {},
  updateFormState: () => {},
  updateConfiguration: () => {},
  onCalculate: () => {},
}

export const CalculationProvider = createContext(defaultContextValue)
