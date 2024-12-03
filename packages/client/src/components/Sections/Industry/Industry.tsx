import React from 'react';

import { Section } from "../../Section";
import { GroupLabel } from "../../../elements/GroupLabel";
import { BasicDropdown } from "../../../elements/BasicDropdown";

import { CommonSectionProps } from "../types";
import { DOMAINS_OPTIONS } from "../constants";

export const Industry: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {
  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <div>
        <GroupLabel sectionType={sectionType} text={'Industry or Domain'}/>
        <BasicDropdown
          placeholder="Please select"
          options={DOMAINS_OPTIONS}
        />
      </div>
    </Section>
  );
};
