import React, {useContext} from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { LabeledInput } from '../../../elements/LabeledInput';
import { InputButtonGroup } from '../../InputButtonGroup';

import { CommonSectionProps } from '../types';
import { INPUT_NAMES, UNIQUE_PAGES } from '../constants';
import { SECTIONS_LIST } from '../SectionsList/constants';
import { CalculationProvider } from '../../../pages/Calculation/CalculationProvider';

import locales from '../../../locales/en.json';

export const Rates: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {
  const { formState } = useContext(CalculationProvider);

  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <InputButtonGroup
              label={locales.rates.manHourRateForTester}
              selectedValue={formState.rates.man_hour_rate_for_tester}
              placeholder='0.0'
              action='USD'
              options={Object.values(UNIQUE_PAGES)}
              sectionType={SECTIONS_LIST.RATES}
              subSectionType={INPUT_NAMES.MAN_HOUR_RATE_FOR_TESTER}
              infoText={locales.rates.manHourRateForTesterHint}
              inputType='labeled'
              ButtonComponent={LabeledInput}
            />
          </Grid.Column>
          <Grid.Column>
            <InputButtonGroup
              label={locales.rates.manHourRateForExpert}
              selectedValue={formState.rates.man_hour_rate_or_expert}
              placeholder='0.0'
              action='USD'
              options={Object.values(UNIQUE_PAGES)}
              sectionType={SECTIONS_LIST.RATES}
              subSectionType={INPUT_NAMES.MAN_HOUR_RATE_FOR_EXPERT}
              infoText={locales.rates.manHourRateForExpertHint}
              inputType='labeled'
              ButtonComponent={LabeledInput}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

