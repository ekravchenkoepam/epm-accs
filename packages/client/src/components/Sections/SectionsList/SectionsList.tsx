import React from 'react';

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

import styles from './SectionList.module.css'

const SectionComponentMap = {
  [SECTIONS_LIST.TARGET_STANDARD]: <TargetStandard sectionType={SECTIONS_LIST.TARGET_STANDARD} />,
  [SECTIONS_LIST.INDUSTRY]: <Industry sectionType={SECTIONS_LIST.INDUSTRY} />,
  [SECTIONS_LIST.ACTIVITIES]: <Activities sectionType={SECTIONS_LIST.ACTIVITIES} />,
  [SECTIONS_LIST.PRODUCT_PAGES]: <ProductPages sectionType={SECTIONS_LIST.PRODUCT_PAGES} />,
  [SECTIONS_LIST.COMPLEXITY]: <Complexity sectionType={SECTIONS_LIST.COMPLEXITY} />,
  [SECTIONS_LIST.SPECIFIC_CONTENT]: <SpecificContent sectionType={SECTIONS_LIST.SPECIFIC_CONTENT} />,
  [SECTIONS_LIST.INTERFACE_LANGUAGES]: <InterfaceLanguages sectionType={SECTIONS_LIST.INTERFACE_LANGUAGES} />,
  [SECTIONS_LIST.CONFIGURATIONS]: <Configurations sectionType={SECTIONS_LIST.CONFIGURATIONS} />,
  [SECTIONS_LIST.DELIVERABLES]: <Deliverables sectionType={SECTIONS_LIST.DELIVERABLES} />,
  [SECTIONS_LIST.RATES]: <Rates sectionType={SECTIONS_LIST.RATES} />,
}

export const SectionsList = () => {
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
