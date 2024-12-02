import React from 'react';

import styles from './Section.module.css';
import locales from '../../locales/en.json'

type LocalesKeys = keyof typeof locales;

type SectionProps = {
  sectionType: LocalesKeys;
  children: React.ReactNode;
  isOptional?: boolean;
};

export const Section: React.FC<SectionProps> = ({
  sectionType,
  children,
  isOptional
}) => {
  return (
    <section className={styles.sectionContainer}>
      <header className="section-header">
        <div className={styles.sectionTitleContainer}>
          <h2 className={styles.sectionTitle}>
            {locales[sectionType].title}
          </h2>
          {isOptional && (
            <h2 className={`
              ${styles.sectionTitle}
              ${isOptional ? styles.optional : ''}
            `}>
              (optional)
            </h2>
          )}
        </div>
        <p className={styles.sectionDescription}>
          {locales[sectionType].description}
        </p>
      </header>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};
