import React, {useContext} from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { LabeledInput } from '../../../elements/LabeledInput';
import { InputButtonGroup } from "../../InputButtonGroup";

import { CommonSectionProps } from '../types';
import { INPUT_NAMES, UNIQUE_PAGES } from "../constants";
import { SECTIONS_LIST } from "../SectionsList/constants";

import locales from "../../../locales/en.json";

export const Rates: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {

  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <InputButtonGroup
              label={locales.rates.manHourRateForTester}
              placeholder='0.0'
              action="USD"
              options={Object.values(UNIQUE_PAGES)}
              sectionType={SECTIONS_LIST.RATES}
              subSectionType={INPUT_NAMES.MAN_HOUR_RATE_FOR_TESTER}
              infoText={locales.targetStandard.standardTypeHint}
              inputType='labeled'
              ButtonComponent={LabeledInput}
            />
          </Grid.Column>
          <Grid.Column>
            <InputButtonGroup
              label={locales.rates.manHourRateForExpert}
              placeholder='0.0'
              action="USD"
              options={Object.values(UNIQUE_PAGES)}
              sectionType={SECTIONS_LIST.RATES}
              subSectionType={INPUT_NAMES.MAN_HOUR_RATE_FOR_EXPERT}
              infoText={locales.targetStandard.standardTypeHint}
              inputType='labeled'
              ButtonComponent={LabeledInput}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

