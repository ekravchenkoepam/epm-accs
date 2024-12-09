import React, {useContext} from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { InputButtonGroup } from '../../InputButtonGroup';
import { NumberInput } from '../../../elements/NumberInput';
import { CheckboxButton } from '../../../elements/Checkbox';
import { ErrorMessage } from "../../ErrorMessage";

import { CommonSectionProps } from '../types';
import { INPUT_NAMES, INTERFACE_LANGUAGES, PDF_PAGES } from '../constants';
import { SECTIONS_LIST } from '../SectionsList/constants';

import { CalculationProvider } from '../../../pages/Calculation/CalculationProvider';

import locales from '../../../locales/en.json';
import styles from '../SpecificContent/SpecificContent.module.css';

export const InterfaceLanguages: React.FC<CommonSectionProps> = ({ sectionType }) => {
  const { formState } = useContext(CalculationProvider);

  return (
    <Section sectionType={sectionType}>
      <Grid stackable>
        <Grid.Row columns={4} className={styles.rowContainer}>
          <Grid.Column>
            <InputButtonGroup
              label={locales.interfaceLanguages.languagesToCheck}
              selectedValue={formState.interfaceLanguages.languages}
              placeholder={'0'}
              options={Object.values(PDF_PAGES)}
              sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES}
              subSectionType={INPUT_NAMES.LANGUAGES}
              infoText={locales.targetStandard.standardTypeHint}
              inputType='number'
              ButtonComponent={NumberInput}
            />
            <ErrorMessage
              sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES}
              subSectionType={INPUT_NAMES.LANGUAGES}
            />
          </Grid.Column>

          <Grid.Column className={styles.columnSection}>
            <InputButtonGroup
              options={Object.values(INTERFACE_LANGUAGES)}
              sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES}
              subSectionType={INPUT_NAMES.HAS_SEVERAL_DIRECTIONS}
              infoText={locales.targetStandard.standardTypeHint}
              inputType='single-checkbox'
              ButtonComponent={CheckboxButton}
            />
            <ErrorMessage
              sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES}
              subSectionType={INPUT_NAMES.HAS_SEVERAL_DIRECTIONS}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

