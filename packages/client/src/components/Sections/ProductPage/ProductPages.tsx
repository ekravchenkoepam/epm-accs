import React, {useContext} from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { NumberInput } from '../../../elements/NumberInput';
import { ErrorMessage } from "../../ErrorMessage";

import { CommonSectionProps } from '../types';
import { INPUT_NAMES, TEMPLATED_PAGES, UNIQUE_PAGES } from '../constants';
import { SECTIONS_LIST } from '../SectionsList/constants';

import { CalculationProvider } from '../../../pages/Calculation/CalculationProvider';

import locales from '../../../locales/en.json';

export const ProductPages: React.FC<CommonSectionProps> = ({ sectionType }) => {
  const { formState } = useContext(CalculationProvider);

  return (
    <Section sectionType={sectionType}>
      <Grid stackable>
        <Grid.Row columns={4}>
          <Grid.Column>
            <InputButtonGroup
              label={locales.productPages.uniquePagesLabel}
              selectedValue={formState.productPages.unique_pages}
              placeholder={'0'}
              options={Object.values(UNIQUE_PAGES)}
              sectionType={SECTIONS_LIST.PRODUCT_PAGES}
              subSectionType={INPUT_NAMES.UNIQUE_PAGES}
              infoText={locales.productPages.uniquePagesHint}
              inputType='number'
              ButtonComponent={NumberInput}
            />
            <ErrorMessage
              sectionType={SECTIONS_LIST.PRODUCT_PAGES}
              subSectionType={INPUT_NAMES.UNIQUE_PAGES}
            />
          </Grid.Column>

          <Grid.Column>
            <InputButtonGroup
              label={locales.productPages.templatedPagesLabel}
              selectedValue={formState.productPages.templated_pages}
              placeholder={'0'}
              options={Object.values(TEMPLATED_PAGES)}
              sectionType={SECTIONS_LIST.PRODUCT_PAGES}
              subSectionType={INPUT_NAMES.TEMPLATED_PAGES}
              infoText={locales.productPages.templatedPagesHint}
              inputType='number'
              ButtonComponent={NumberInput}
            />
            <ErrorMessage
              sectionType={SECTIONS_LIST.PRODUCT_PAGES}
              subSectionType={INPUT_NAMES.TEMPLATED_PAGES}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

