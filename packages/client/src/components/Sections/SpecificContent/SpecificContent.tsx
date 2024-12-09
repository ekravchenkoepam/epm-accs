import React, {useContext} from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { NumberInput } from '../../../elements/NumberInput';

import { CommonSectionProps } from '../types';
import { EMAIL_TEMPLATES, INPUT_NAMES, PDF_PAGES } from '../constants';
import { SECTIONS_LIST } from '../SectionsList/constants';

import { CalculationProvider } from '../../../pages/Calculation/CalculationProvider';

import locales from '../../../locales/en.json';

export const SpecificContent: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {
  const { formState } = useContext(CalculationProvider);

  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <Grid stackable>
        <Grid.Row columns={4}>
          <Grid.Column>
            <InputButtonGroup
              label={locales.specificContent.pdfPages}
              selectedValue={formState.specificContent.pdf_pages}
              placeholder={'0'}
              options={Object.values(PDF_PAGES)}
              sectionType={SECTIONS_LIST.SPECIFIC_CONTENT}
              subSectionType={INPUT_NAMES.PDF_PAGES}
              infoText={locales.specificContent.pdfPagesHint}
              inputType='number'
              ButtonComponent={NumberInput}
            />
          </Grid.Column>

          <Grid.Column>
            <InputButtonGroup
              label={locales.specificContent.emailTemplates}
              selectedValue={formState.specificContent.email_templates}
              placeholder={'0'}
              options={Object.values(EMAIL_TEMPLATES)}
              sectionType={SECTIONS_LIST.SPECIFIC_CONTENT}
              subSectionType={INPUT_NAMES.EMAIL_TEMPLATES}
              infoText={locales.specificContent.emailTemplatesHint}
              inputType='number'
              ButtonComponent={NumberInput}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

