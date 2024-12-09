import React from 'react';
import { Formik } from 'formik';

import { Header } from '../../components/Blocks/Header';
import { Footer } from '../../components/Blocks/Footer';
import { SectionsList } from '../../components/Sections';

import { useFormStateFromURL } from '../../hooks/useFormStateFromURL';
import { calculationValidationSchema } from '../../utils/validationSchema';
import { FormValues } from '../../types';

import { CalculationProvider } from './CalculationProvider';

export const Calculation = () => {
  const {
    formState,
    updateFormState,
    updateConfiguration,
    onCalculate,
  } = useFormStateFromURL();

  return (
    <Formik<FormValues>
      initialValues={formState}
      enableReinitialize
      validationSchema={calculationValidationSchema}
      onSubmit={(values) => {
        onCalculate(values);
      }
    }>
      <CalculationProvider.Provider value={{
        formState,
        updateFormState,
        updateConfiguration,
        onCalculate,
      }}>
        <Header />
        <SectionsList />
        <Footer />
      </CalculationProvider.Provider>
    </Formik>
  );
};
