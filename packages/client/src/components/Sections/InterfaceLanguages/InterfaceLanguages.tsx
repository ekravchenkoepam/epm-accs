import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { NumberInput } from '../../../elements/NumberInput';
import { CheckboxButton } from "../../../elements/Checkbox";

import { CommonSectionProps } from '../types';
import { INPUT_NAMES, INTERFACE_LANGUAGES, PDF_PAGES } from '../constants';
import { SECTIONS_LIST } from "../SectionsList/constants";

import locales from '../../../locales/en.json';
import styles from "../SpecificContent/SpecificContent.module.css";

export const InterfaceLanguages: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <Grid stackable>
        <Grid.Row columns={2} className={styles.rowContainer}>
          <Grid.Column>
            <InputButtonGroup
              label={locales.interfaceLanguages.languagesToCheck}
              placeholder={'0'}
              options={Object.values(PDF_PAGES)}
              sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES}
              subSectionType={INPUT_NAMES.PDF_PAGES}
              infoText={locales.targetStandard.standardTypeHint}
              inputType='number'
              ButtonComponent={NumberInput}
            />
          </Grid.Column>

          <Grid.Column className={styles.columnSection}>
            <InputButtonGroup
              options={Object.values(INTERFACE_LANGUAGES)}
              sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES}
              subSectionType={INPUT_NAMES.EMAIL_TEMPLATES}
              infoText={locales.targetStandard.standardTypeHint}
              inputType='checkbox'
              ButtonComponent={CheckboxButton}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

