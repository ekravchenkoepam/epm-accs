import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { RadioButton } from '../../../elements/RadioButton';
import { ErrorMessage } from "../../ErrorMessage";

import { CommonSectionProps } from '../types';

import { CONFORMANCE_LEVEL, WCAG_STANDARDS, INPUT_NAMES } from '../constants';
import { SECTIONS_LIST } from "../SectionsList/constants";

import styles from './TargetStandard.module.css'
import locales from '../../../locales/en.json'

export const TargetStandard: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <React.Fragment>
      <div className={styles.fieldsRequired}>{locales.targetStandard.allFieldsRequired}</div>
      <Section sectionType={sectionType}>
        <Grid stackable>
          <Grid.Row columns={4}>
            <Grid.Column>
              <InputButtonGroup
                inputType='radio'
                label={locales.targetStandard.standardTypeLabel}
                options={Object.values(WCAG_STANDARDS)}
                sectionType={SECTIONS_LIST.TARGET_STANDARD}
                subSectionType={INPUT_NAMES.STANDARD_TYPE}
                infoText={locales.targetStandard.standardTypeHint}
                ButtonComponent={RadioButton}
              />
              <ErrorMessage
                sectionType={SECTIONS_LIST.TARGET_STANDARD}
                subSectionType={INPUT_NAMES.STANDARD_TYPE}
              />
            </Grid.Column>
            <Grid.Column>
              <InputButtonGroup
                inputType='radio'
                label={locales.targetStandard.conformanceLevelLabel}
                options={Object.values(CONFORMANCE_LEVEL)}
                sectionType={SECTIONS_LIST.TARGET_STANDARD}
                subSectionType={INPUT_NAMES.CONFORMANCE_LEVEL}
                infoText={locales.targetStandard.conformanceLevelHint}
                ButtonComponent={RadioButton}
              />
              <ErrorMessage
                sectionType={SECTIONS_LIST.TARGET_STANDARD}
                subSectionType={INPUT_NAMES.CONFORMANCE_LEVEL}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Section>
    </React.Fragment>
  )
}
