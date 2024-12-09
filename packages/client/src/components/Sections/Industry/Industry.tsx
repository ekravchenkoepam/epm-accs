import React, {useContext} from 'react';
import { Form } from "semantic-ui-react";

import { Section } from '../../Section';
import { GroupLabel } from '../../../elements/GroupLabel';
import { BasicDropdown } from '../../../elements/BasicDropdown';

import { CommonSectionProps } from '../types';
import { DOMAINS_OPTIONS } from '../constants';
import { CalculationProvider } from "../../../pages/Calculation/CalculationProvider";

import locales from '../../../locales/en.json'

export const Industry: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {
  const { formState, updateFormState } = useContext(CalculationProvider);

  const handleUpdateState = (newSelectedValue: string) => {
    updateFormState('industry', {
      'domain': newSelectedValue
    });
  }

  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <div>
        <GroupLabel
          text={locales.industry.industryOrDomain}
          htmlFor={sectionType}
        />
        <Form>
          <Form.Field width={2}>
            <BasicDropdown
              id={sectionType}
              placeholder='Please select'
              options={DOMAINS_OPTIONS}
              value={formState.industry.domain}
              onChange={(value) => handleUpdateState(value)}
            />
          </Form.Field>
        </Form>
      </div>
    </Section>
  );
};
