import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { NumberInput } from '../../../elements/NumberInput';

import { CommonSectionProps } from '../types';
import { INPUT_NAMES, TEMPLATED_PAGES, UNIQUE_PAGES } from '../constants';
import { SECTIONS_LIST } from "../SectionsList/constants";

import locales from '../../../locales/en.json';

export const ProductPages: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <InputButtonGroup
              label={locales.productPages.uniquePages}
              placeholder={'0'}
              options={Object.values(UNIQUE_PAGES)}
              sectionType={SECTIONS_LIST.PRODUCT_PAGES}
              subSectionType={INPUT_NAMES.UNIQUE_PAGES}
              infoText={locales.targetStandard.standardTypeHint}
              inputType="number"
              ButtonComponent={NumberInput}
            />
          </Grid.Column>

          <Grid.Column>
            <InputButtonGroup
              label={locales.productPages.templatedPages}
              placeholder={'0'}
              options={Object.values(TEMPLATED_PAGES)}
              sectionType={SECTIONS_LIST.PRODUCT_PAGES}
              subSectionType={INPUT_NAMES.TEMPLATED_PAGES}
              infoText={locales.targetStandard.standardTypeHint}
              inputType="number"
              ButtonComponent={NumberInput}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

