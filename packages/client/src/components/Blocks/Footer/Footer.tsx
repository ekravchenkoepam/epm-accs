import React, {useContext} from 'react';
import { Button } from 'semantic-ui-react';

import { CalculationProvider } from "../../../pages/Calculation/CalculationProvider";

import styles from './Footer.module.css';

export const Footer = () => {
  const { onCalculate } = useContext(CalculationProvider);

  return (
    <div className={styles.sectionWrapper}>
      <div>
        <Button primary onClick={onCalculate}>Calculate</Button>
      </div>
    </div>
  );
};
