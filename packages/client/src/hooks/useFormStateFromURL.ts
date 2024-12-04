import { useState, useEffect } from 'react';

import { SECTIONS_LIST } from "../components/Sections/SectionsList/constants";
import {
  ACTIVITY_TYPES,
  ASSESSMENT_TYPES,
  CONFORMANCE_LEVEL,
  INPUT_NAMES,
  LEVELS,
  WCAG_STANDARDS
} from "../components/Sections/constants";

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
    [INPUT_NAMES.ADDITIONAL_ACTIVITIES]: [ACTIVITY_TYPES.REMEDIATION_RECOMMENDATIONS],
  },
  [SECTIONS_LIST.PRODUCT_PAGES]: {
    [INPUT_NAMES.UNIQUE_PAGES]: 0,
    [INPUT_NAMES.TEMPLATED_PAGES]: 0,
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

export const useFormStateFromURL = () => {
  const [formState, setFormState] = useState(DEFAULT_FORM_STATE);

  const serializeFormStateToURL = (state: any) => {
    const params: Record<string, string> = {};

    Object.keys(state).forEach((sectionKey) => {
      const section = state[sectionKey];

      Object.keys(section).forEach((inputKey) => {
        params[`${sectionKey}[${inputKey}]`] = JSON.stringify(section[inputKey]);
      });
    });

    return new URLSearchParams(params).toString();
  };

  const parseParamsToState = (params: any) => {
    return [...params].reduce((acc, [key, value]) => {
      value = JSON.parse(value);

      const keys = key.split('[');
      const mainKey = keys[0];
      let subKey = keys[1];

      if (subKey) {
        subKey = subKey.slice(0, -1);
      }

      if (!acc[mainKey]) {
        acc[mainKey] = {};
      }

      acc[mainKey][subKey] = value;

      return acc;
    }, {});
  };

  const updateFormState = (section: any, value: any) => {
    setFormState((prev) => ({
      ...prev,
      // @ts-ignore
      [section]: { ...prev[section], ...value },
    }));
  };

  const onCalculate = () => {
    console.log(formState)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.toString()) {
      const newState = parseParamsToState(params);
      setFormState(newState);
    } else {
      setFormState(DEFAULT_FORM_STATE);
    }
  }, []);

  useEffect(() => {
    const paramsString = serializeFormStateToURL(formState);
    const newUrl = `${window.location.pathname}?${paramsString}`;

    window.history.replaceState({}, '', newUrl);
  }, [formState]);

  return {
    formState,
    onCalculate,
    updateFormState
  };
};
