import React from "react";

import { Section } from "../../Section";
import { InputButtonGroup } from "../../InputButtonGroup";
import { NumberInput } from "../../../elements/NumberInput";

import { CommonSectionProps } from "../types";
import { TEMPLATED_PAGES, UNIQUE_PAGES } from "../constants";
import { SECTIONS_LIST } from "../SectionsList/constants";

import styles from "../../Section/Section.module.css";
import locales from "../../../locales/en.json";


export const ProductPages: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <div>
        <div className={styles.optionBlocks}>
          <InputButtonGroup
            label={locales.productPages.uniquePages}
            options={Object.values(UNIQUE_PAGES)}
            sectionType={SECTIONS_LIST.PRODUCT_PAGES}
            infoText={locales.targetStandard.standardTypeHint}
            isTextInput
            ButtonComponent={NumberInput}
          />

          <InputButtonGroup
            label={locales.productPages.templatedPages}
            options={Object.values(TEMPLATED_PAGES)}
            sectionType={SECTIONS_LIST.PRODUCT_PAGES}
            infoText={locales.targetStandard.standardTypeHint}
            isTextInput
            ButtonComponent={NumberInput}
          />
        </div>
      </div>
    </Section>
  )
}

