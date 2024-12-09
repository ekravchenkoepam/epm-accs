import React from 'react';
import { Container } from 'semantic-ui-react';

import styles from './Header.module.css';
import locales from '../../../locales/en.json';

export const Header = () => {
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <h1>{locales.header.title}</h1>
        <div className={styles.descriptionContainer}>
          <div>
            {locales.header.description_primary}
          </div>
          <div>
            {locales.header.description_secondary}
          </div>
        </div>
      </Container>
    </div>
  );
};
