import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Section } from '../../Section';
import { Toggle } from '../../../elements/Toggle';
import { RadioButton } from '../../../elements/RadioButton';
import { InputButtonGroup } from '../../InputButtonGroup';
import { GroupLabel } from "../../../elements/GroupLabel";

import { CommonSectionProps } from '../types';
import { ADDITIONAL_DELIVERABLES, BACKLOG_TYPES, INPUT_NAMES } from '../constants';
import { SECTIONS_LIST } from '../SectionsList/constants';

import locales from '../../../locales/en.json';

export const Deliverables: React.FC<CommonSectionProps> = ({sectionType}) => {
  return (
    <Section sectionType={sectionType}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <InputButtonGroup
              inputType='radio'
              label={locales.deliverables.typeOfBacklog}
              options={Object.values(BACKLOG_TYPES)}
              sectionType={SECTIONS_LIST.DELIVERABLES}
              subSectionType={INPUT_NAMES.PRODUCT_COMPLEXITY}
              infoText={locales.complexity.productComplexityHint}
              ButtonComponent={RadioButton}
            />
          </Grid.Column>
          <Grid.Column>
            <GroupLabel
              text={locales.deliverables.additionalDeliverables}
              infoText={locales.complexity.productComplexityHint}
              isOptional
              hasInfoHint
            />
            <div style={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
              {Object.values(ADDITIONAL_DELIVERABLES).map((value) => (
                <Toggle labelText={value}/>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  )
}

