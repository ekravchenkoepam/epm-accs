import React from 'react';
import {Grid, Input} from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { RadioButton } from '../../../elements/RadioButton';

import { CommonSectionProps } from '../types';
import { CONFORMANCE_LEVEL, WCAG_STANDARDS, INPUT_NAMES } from '../constants';

import locales from '../../../locales/en.json'
import {SECTIONS_LIST} from "../SectionsList/constants";

export const TargetStandard: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <InputButtonGroup
              inputType="radio"
              label={locales.targetStandard.standardTypeLabel}
              options={Object.values(WCAG_STANDARDS)}
              sectionType={SECTIONS_LIST.TARGET_STANDARD}
              subSectionType={INPUT_NAMES.STANDARD_TYPE}
              infoText={locales.targetStandard.standardTypeHint}
              ButtonComponent={RadioButton}
            />
          </Grid.Column>
          <Grid.Column>
            <InputButtonGroup
              inputType="radio"
              label={locales.targetStandard.conformanceLevelLabel}
              options={Object.values(CONFORMANCE_LEVEL)}
              sectionType={SECTIONS_LIST.TARGET_STANDARD}
              subSectionType={INPUT_NAMES.CONFORMANCE_LEVEL}
              infoText={locales.targetStandard.conformanceLevelHint}
              ButtonComponent={RadioButton}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}
