import React from "react";

import { Section } from "../../Section";
import { InputButtonGroup } from "../../InputButtonGroup";
import { RadioButton } from "../../../elements/RadioButton";
import { CheckboxButton } from "../../../elements/Checkbox";

import { CommonSectionProps } from "../types";
import { ADDITIONAL_ACTIVITIES, ASSESSMENT_TYPES } from "../constants";
import { SECTIONS_LIST } from "../SectionsList/constants";

import styles from '../../Section/Section.module.css'
import locales from "../../../locales/en.json";

export const Activities: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <div className={styles.optionBlocks}>
        <InputButtonGroup
          label={locales.activities.assessmentTypeLabel}
          options={Object.values(ASSESSMENT_TYPES)}
          sectionType={SECTIONS_LIST.ACTIVITIES}
          infoText={locales.activities.assessmentTypeHint}
          ButtonComponent={RadioButton}
        />
        <InputButtonGroup
          label={locales.activities.additionalActivities}
          options={Object.values(ADDITIONAL_ACTIVITIES)}
          sectionType={SECTIONS_LIST.ACTIVITIES}
          infoText={locales.activities.additionalActivitiesHint}
          ButtonComponent={CheckboxButton}
        />
      </div>
    </Section>
  )
}

