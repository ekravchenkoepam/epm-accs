import React from "react";

import { Section } from "../../Section";
import { RadioButton } from "../../../elements/RadioButton";
import { InputButtonGroup } from "../../InputButtonGroup";

import { CommonSectionProps } from "../types";
import { INPUT_NAMES, LEVELS } from "../constants";

import locales from "../../../locales/en.json";

export const Complexity: React.FC<CommonSectionProps> = ({ sectionType }) => {
  return (
    <Section sectionType={sectionType}>
      <div>
        <InputButtonGroup
          label={locales.complexity.productComplexity}
          options={Object.values(LEVELS)}
          sectionType={INPUT_NAMES.PRODUCT_COMPLEXITY}
          infoText={locales.complexity.productComplexityHint}
          ButtonComponent={RadioButton}
        />
      </div>
    </Section>
  )
}

