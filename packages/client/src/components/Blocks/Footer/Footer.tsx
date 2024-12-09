import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { useFormikContext } from 'formik';

import { calculationService } from '../../../services/calculationService';
import { CalculationProvider } from '../../../pages/Calculation/CalculationProvider';

import styles from './Footer.module.css';
import locales from '../../../locales/en.json';

export const Footer = () => {
  const { submitForm } = useFormikContext();
  const { formState } = useContext(CalculationProvider)

  const handleSubmit = async () => {
    await submitForm();
    await calculationService(formState)
  }

  return (
    <div className={styles.sectionWrapper}>
      <div>
        <Button primary onClick={handleSubmit}
        >
          {locales.footer.buttonText}
        </Button>
      </div>
    </div>
  );
};
