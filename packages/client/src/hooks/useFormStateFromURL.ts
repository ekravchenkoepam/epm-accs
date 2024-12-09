import { useState, useEffect } from 'react';

import { SECTIONS_LIST } from '../components/Sections/SectionsList/constants';
import { INPUT_NAMES } from '../components/Sections/constants';

const DEFAULT_FORM_STATE = {
  [SECTIONS_LIST.TARGET_STANDARD]: {
    [INPUT_NAMES.STANDARD_TYPE]: null,
    [INPUT_NAMES.CONFORMANCE_LEVEL]: null
  },
  [SECTIONS_LIST.INDUSTRY]: {
    [INPUT_NAMES.DOMAIN]: ''
  },
  [SECTIONS_LIST.ACTIVITIES]: {
    [INPUT_NAMES.ASSESSMENT_TYPE]: null,
    [INPUT_NAMES.ADDITIONAL_ACTIVITIES]: [],
  },
  [SECTIONS_LIST.PRODUCT_PAGES]: {
    [INPUT_NAMES.UNIQUE_PAGES]: null,
    [INPUT_NAMES.TEMPLATED_PAGES]: null,
  },
  [SECTIONS_LIST.COMPLEXITY]: {
    [INPUT_NAMES.PRODUCT_COMPLEXITY]: ''
  },
  [SECTIONS_LIST.SPECIFIC_CONTENT]: {
    [INPUT_NAMES.PDF_PAGES]: null,
    [INPUT_NAMES.EMAIL_TEMPLATES]: null,
  },
  [SECTIONS_LIST.INTERFACE_LANGUAGES]: {
    [INPUT_NAMES.LANGUAGES]: null,
    [INPUT_NAMES.HAS_SEVERAL_DIRECTIONS]: null,
  },
  [SECTIONS_LIST.CONFIGURATIONS]: {},
  [SECTIONS_LIST.DELIVERABLES]: {
    [INPUT_NAMES.BACKLOG_TYPE]: null,
    [INPUT_NAMES.ADDITIONAL_DELIVERABLES]: {
      [INPUT_NAMES.VPAT]: '',
      [INPUT_NAMES.TEST_RESULT_REPORT]: ''
    }
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
      [section]: {
        // @ts-ignore
        ...prev[section],
        ...value
      },
    }));
  };

  const updateConfiguration = (selectedApplication: string, selectedChips: Record<string, string[]>) => {
    setFormState((prev) => ({
      ...prev,
      configurations: {
        [selectedApplication]: selectedChips,
      },
    }));
  };

  const onCalculate = (values: any) => {
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
    updateFormState,
    updateConfiguration
  };
};
