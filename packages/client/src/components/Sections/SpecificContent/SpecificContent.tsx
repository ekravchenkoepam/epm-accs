import React from "react";

import { Section } from "../../Section";
import { InputButtonGroup } from "../../InputButtonGroup";
import { NumberInput } from "../../../elements/NumberInput";

import { CommonSectionProps } from "../types";
import { EMAIL_TEMPLATES, INPUT_NAMES, PDF_PAGES } from "../constants";

import styles from "../../Section/Section.module.css";
import locales from "../../../locales/en.json";

export const SpecificContent: React.FC<CommonSectionProps> = ({ sectionType, isOptional }) => {
  return (
    <Section sectionType={sectionType} isOptional={isOptional}>
      <div>
        <div className={styles.optionBlocks}>
          <InputButtonGroup
            label={locales.specificContent.pdfPages}
            options={Object.values(PDF_PAGES)}
            sectionType={INPUT_NAMES.PDF_PAGES}
            infoText={locales.targetStandard.standardTypeHint}
            isTextInput
            ButtonComponent={NumberInput}
          />

          <InputButtonGroup
            label={locales.specificContent.pdfPages}
            options={Object.values(EMAIL_TEMPLATES)}
            sectionType={INPUT_NAMES.EMAIL_TEMPLATES}
            infoText={locales.targetStandard.standardTypeHint}
            isTextInput
            ButtonComponent={NumberInput}
          />
        </div>
      </div>
    </Section>
  )
}

