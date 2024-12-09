import React from 'react';

import styles from './Section.module.css';
import locales from '../../locales/en.json'

type LocalesKeys = keyof typeof locales;

type SectionData = {
  title?: string;
  description?: string;
  [key: string]: any;
};

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
  const sectionData = locales[sectionType] as SectionData;

  return (
    <section className={styles.sectionContainer}>
      <header className="section-header">
        <div className={styles.sectionTitleContainer}>
          <h2 className={styles.sectionTitle}>
            {sectionData?.title }
          </h2>
          {isOptional && (
            <div className={`
              ${styles.sectionTitle}
              ${isOptional ? styles.optional : ''}
            `}>
              (optional)
            </div>
          )}
        </div>
        <p className={styles.sectionDescription}>
          {sectionData.description}
        </p>
      </header>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};
