import React, { useState } from 'react';

import { SECTIONS_LIST } from "./constants";
import { TargetStandard } from "../TargetStandard";
import { Industry } from "../Industry";
import { Activities } from "../Activies";
import { ProductPages } from "../ProductPage";
import { Complexity } from "../Complexity";
import { SpecificContent } from "../SpecificContent";
import { InterfaceLanguages } from "../InterfaceLanguages";
import { Configurations } from "../Configurations";
import { Deliverables } from "../Deliverables";
import { Rates } from "../Rates";

import {
  ACTIVITY_TYPES,
  ASSESSMENT_TYPES,
  CONFORMANCE_LEVEL,
  INPUT_NAMES, LEVELS,
  WCAG_STANDARDS
} from "../constants";

import styles from './SectionList.module.css'

const SectionComponentMap = {
  [SECTIONS_LIST.TARGET_STANDARD]: <TargetStandard sectionType={SECTIONS_LIST.TARGET_STANDARD} />,
  [SECTIONS_LIST.INDUSTRY]: <Industry sectionType={SECTIONS_LIST.INDUSTRY} isOptional />,
  [SECTIONS_LIST.ACTIVITIES]: <Activities sectionType={SECTIONS_LIST.ACTIVITIES} />,
  [SECTIONS_LIST.PRODUCT_PAGES]: <ProductPages sectionType={SECTIONS_LIST.PRODUCT_PAGES} />,
  [SECTIONS_LIST.COMPLEXITY]: <Complexity sectionType={SECTIONS_LIST.COMPLEXITY} />,
  [SECTIONS_LIST.SPECIFIC_CONTENT]: <SpecificContent sectionType={SECTIONS_LIST.SPECIFIC_CONTENT} isOptional />,
  [SECTIONS_LIST.INTERFACE_LANGUAGES]: <InterfaceLanguages sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES} />,
  [SECTIONS_LIST.CONFIGURATIONS]: <Configurations sectionType={SECTIONS_LIST.CONFIGURATIONS} />,
  [SECTIONS_LIST.DELIVERABLES]: <Deliverables sectionType={SECTIONS_LIST.DELIVERABLES} />,
  [SECTIONS_LIST.RATES]: <Rates sectionType={SECTIONS_LIST.RATES} isOptional />,
}

const DEFAULT_FORM_STATE = {
  [SECTIONS_LIST.TARGET_STANDARD]: {
    [INPUT_NAMES.STANDARD_TYPE]: WCAG_STANDARDS.VERSION_2_0,
    [INPUT_NAMES.CONFORMANCE_LEVEL]: CONFORMANCE_LEVEL.A
  },
  [SECTIONS_LIST.INDUSTRY]: {
    [INPUT_NAMES.DOMAIN]: ''
  },
  [SECTIONS_LIST.ACTIVITIES]: {
    [INPUT_NAMES.ASSESSMENT_TYPE]: ASSESSMENT_TYPES.FULL_ASSESSMENT,
    [INPUT_NAMES.ADDITIONAL_ACTIVITIES]: ACTIVITY_TYPES.REMEDIATION_RECOMMENDATIONS,
  },
  [SECTIONS_LIST.PRODUCT_PAGES]: {
    [INPUT_NAMES.UNIQUE_PAGES]: '',
    [INPUT_NAMES.TEMPLATED_PAGES]: '',
  },
  [SECTIONS_LIST.COMPLEXITY]: {
    [INPUT_NAMES.PRODUCT_COMPLEXITY]: LEVELS.LOW
  },
  [SECTIONS_LIST.SPECIFIC_CONTENT]: {
    [INPUT_NAMES.PDF_PAGES]: null,
    [INPUT_NAMES.EMAIL_TEMPLATES]: null,
  },
  [SECTIONS_LIST.INTERFACE_LANGUAGES]: {
    [INPUT_NAMES.LANGUAGES]: null,
    [INPUT_NAMES.HAS_SEVERAL_DIRECTIONS]: false,
  },
  [SECTIONS_LIST.CONFIGURATIONS]: {},
  [SECTIONS_LIST.DELIVERABLES]: {
    [INPUT_NAMES.BACKLOG_TYPE]: LEVELS.LOW
  },
  [SECTIONS_LIST.RATES]: {
    [INPUT_NAMES.MAN_HOUR_RATE_FOR_TESTER]: null,
    [INPUT_NAMES.MAN_HOUR_RATE_FOR_EXPERT]: null,
  }
}

export const SectionsList = () => {
  const form = useState(DEFAULT_FORM_STATE);

  return (
    <div className={styles.sectionListContainer}>
      {Object.values(SECTIONS_LIST).map((section) => (
        SectionComponentMap[section] && (
          <React.Fragment key={section}>
            {SectionComponentMap[section]}
          </React.Fragment>
        )
      ))}
    </div>
  );
}
