import React from 'react';
import { Container } from 'semantic-ui-react';

import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <h1>Calculation</h1>
        <div className={styles.descriptionContainer}>
          <div>
            The goal of this tool is to offer indicative cost and effort estimates, useful during proposal preparations
            and pre-sales activities, including responding to RFXs.
          </div>
          <div>
            The provided results are intended for general understanding and must be verified and adjusted by an
            Accessibility Subject Matter Expert (SME) before finalizing costs with clients or completing Statements of
            Work (SOW).
          </div>
          <div>
            All fields are required unless marked as Optional.
          </div>
        </div>
      </Container>
    </div>
  );
};
