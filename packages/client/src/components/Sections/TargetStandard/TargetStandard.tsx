import React from "react";

import { Section } from "../../Section";
import { InputButtonGroup } from "../../InputButtonGroup";
import { RadioButton } from "../../../elements/RadioButton";

import { CommonSectionProps } from "../types";
import { CONFORMANCE_LEVEL, WCAG_STANDARDS, INPUT_NAMES } from "../constants";

import styles from '../../Section/Section.module.css'
import locales from '../../../locales/en.json'

export const TargetStandard: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <div>
        <div className={styles.optionBlocks}>
          <InputButtonGroup
            label={locales.targetStandard.standardTypeLabel}
            options={Object.values(WCAG_STANDARDS)}
            sectionType={INPUT_NAMES.STANDARD_TYPE}
            infoText={locales.targetStandard.standardTypeHint}
            ButtonComponent={RadioButton}
          />

          <InputButtonGroup
            label={locales.targetStandard.conformanceLevelLabel}
            options={Object.values(CONFORMANCE_LEVEL)}
            sectionType={INPUT_NAMES.CONFORMANCE_LEVEL}
            infoText={locales.targetStandard.conformanceLevelHint}
            ButtonComponent={RadioButton}
          />
        </div>
      </div>
    </Section>
  )
}

