import React from "react";

import { Section } from "../../Section";
import { RadioButtonGroup } from "../../RadioButtonGroup";

import { CommonSectionProps } from "../types";
import { SECTIONS_LIST } from "../SectionsList/constants";
import { CONFORMANCE_LEVEL, WCAG_STANDARDS } from "../constants";

import styles from './TargetStandard.module.css'
import locales from '../../../locales/en.json'

export const TargetStandard: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <div>
        <div className={styles.optionBlocks}>
          <RadioButtonGroup
            label={locales.targetStandard.standardTypeLabel}
            options={Object.values(WCAG_STANDARDS)}
            sectionType={SECTIONS_LIST.TARGET_STANDARD}
            infoText={locales.targetStandard.standardTypeHint}
          />

          <RadioButtonGroup
            label={locales.targetStandard.conformanceLevelLabel}
            options={Object.values(CONFORMANCE_LEVEL)}
            sectionType={SECTIONS_LIST.TARGET_STANDARD}
            infoText={locales.targetStandard.conformanceLevelHint}
          />
        </div>
      </div>
    </Section>
  )
}

