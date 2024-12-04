import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { NumberInput } from '../../../elements/NumberInput';

import { CommonSectionProps } from '../types';
import { EMAIL_TEMPLATES, INPUT_NAMES, PDF_PAGES } from '../constants';

import styles from './SpecificContent.module.css'
import locales from '../../../locales/en.json';
import {SECTIONS_LIST} from "../SectionsList/constants";

export const SpecificContent: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {
  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <InputButtonGroup
              label={locales.specificContent.pdfPages}
              placeholder={'0'}
              options={Object.values(PDF_PAGES)}
              sectionType={SECTIONS_LIST.SPECIFIC_CONTENT}
              subSectionType={INPUT_NAMES.PDF_PAGES}
              infoText={locales.targetStandard.standardTypeHint}
              inputType='number'
              ButtonComponent={NumberInput}
            />
          </Grid.Column>

          <Grid.Column>
            <InputButtonGroup
              label={locales.specificContent.emailTemplates}
              placeholder={'0'}
              options={Object.values(EMAIL_TEMPLATES)}
              sectionType={SECTIONS_LIST.SPECIFIC_CONTENT}
              subSectionType={INPUT_NAMES.EMAIL_TEMPLATES}
              infoText={locales.targetStandard.standardTypeHint}
              inputType='number'
              ButtonComponent={NumberInput}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

