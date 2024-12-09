import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { RadioButton } from '../../../elements/RadioButton';
import { CheckboxButton } from '../../../elements/Checkbox';
import { ErrorMessage } from "../../ErrorMessage";

import { CommonSectionProps } from '../types';
import { ADDITIONAL_ACTIVITIES, ASSESSMENT_TYPES, INPUT_NAMES } from '../constants';
import { SECTIONS_LIST } from '../SectionsList/constants';

import locales from '../../../locales/en.json';

export const Activities: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <Grid stackable>
        <Grid.Row columns={4}>
          <Grid.Column>
            <InputButtonGroup
              inputType='radio'
              label={locales.activities.assessmentTypeLabel}
              options={Object.values(ASSESSMENT_TYPES)}
              sectionType={SECTIONS_LIST.ACTIVITIES}
              subSectionType={INPUT_NAMES.ASSESSMENT_TYPE}
              infoText={locales.activities.assessmentTypeHint}
              ButtonComponent={RadioButton}
            />
            <ErrorMessage
              sectionType={SECTIONS_LIST.ACTIVITIES}
              subSectionType={INPUT_NAMES.ASSESSMENT_TYPE}
            />
          </Grid.Column>
          <Grid.Column>
            <InputButtonGroup
              inputType='multi-checkbox'
              label={locales.activities.additionalActivities}
              options={Object.values(ADDITIONAL_ACTIVITIES)}
              sectionType={SECTIONS_LIST.ACTIVITIES}
              subSectionType={INPUT_NAMES.ADDITIONAL_ACTIVITIES}
              infoText={locales.activities.additionalActivitiesHint}
              ButtonComponent={CheckboxButton}
            />
            <ErrorMessage
              sectionType={SECTIONS_LIST.ACTIVITIES}
              subSectionType={INPUT_NAMES.ADDITIONAL_ACTIVITIES}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

