import React from 'react';

import { Header } from '../../components/Blocks/Header';
import { Footer } from '../../components/Blocks/Footer';
import { SectionsList } from '../../components/Sections';

import { CalculationProvider } from './CalculationProvider';

import { useFormStateFromURL } from '../../hooks/useFormStateFromURL';

export const Calculation = () => {
  const {
    formState,
    updateFormState,
    onCalculate,
  } = useFormStateFromURL();

  return (
    <CalculationProvider.Provider value={{
      formState,
      updateFormState,
      onCalculate,
    }}>
      <Header />
      <SectionsList />
      <Footer />
    </CalculationProvider.Provider>
  );
};
