import React from 'react';

import { Section } from '../../Section';
import { GroupLabel } from '../../../elements/GroupLabel';
import { BasicDropdown } from '../../../elements/BasicDropdown';

import { CommonSectionProps } from '../types';
import { DOMAINS_OPTIONS } from '../constants';

import locales from '../../../locales/en.json'

export const Industry: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {
  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <div>
        <GroupLabel
          text={locales.industry.industryOrDomain}
          htmlFor={sectionType}
        />
        <BasicDropdown
          id={sectionType}
          placeholder='Please select'
          options={DOMAINS_OPTIONS}
          onChange={() => {}}
        />
      </div>
    </Section>
  );
};
