import {
  object,
  string,
  number,
  array,
  boolean
} from 'yup';

import { SECTIONS_LIST } from "../components/Sections/SectionsList/constants";
import { INPUT_NAMES } from "../components/Sections/constants";

export const calculationValidationSchema = object({
  [SECTIONS_LIST.TARGET_STANDARD]: object({
    [INPUT_NAMES.STANDARD_TYPE]: string().required('Type of standard is required'),
    [INPUT_NAMES.CONFORMANCE_LEVEL]: string().required('Conformance level is required'),
  }),
  [SECTIONS_LIST.INDUSTRY]: object({
    [INPUT_NAMES.DOMAIN]: string(),
  }),
  [SECTIONS_LIST.ACTIVITIES]: object({
    [INPUT_NAMES.ASSESSMENT_TYPE]: string().required('Assessment type is required'),
    [INPUT_NAMES.ADDITIONAL_ACTIVITIES]: array()
      .of(string())
      .min(1, 'At least one additional activity is required')
      .required('Additional activities are required'),
  }),
  [SECTIONS_LIST.PRODUCT_PAGES]: object({
    [INPUT_NAMES.UNIQUE_PAGES]: number()
      .min(0, 'Unique pages cannot be negative')
      .required('Unique pages are required'),
    [INPUT_NAMES.TEMPLATED_PAGES]: number()
      .min(0, 'Templated pages cannot be negative')
      .required('Templated pages are required'),
  }),
  [SECTIONS_LIST.COMPLEXITY]: object({
    [INPUT_NAMES.PRODUCT_COMPLEXITY]: string().required('Product complexity is required'),
  }),
  [SECTIONS_LIST.SPECIFIC_CONTENT]: object({
    [INPUT_NAMES.PDF_PAGES]: number().nullable().min(0, 'PDF pages cannot be negative'),
    [INPUT_NAMES.EMAIL_TEMPLATES]: number()
      .nullable()
      .min(0, 'Email templates cannot be negative'),
  }),
  [SECTIONS_LIST.INTERFACE_LANGUAGES]: object({
    [INPUT_NAMES.LANGUAGES]: array()
      .nullable()
      .of(string())
      .min(1, 'At least one language is required')
      .required('Languages to check is required'),
    [INPUT_NAMES.HAS_SEVERAL_DIRECTIONS]: boolean().required(
      'Product has several dreading directions is required'
    ),
  }),
  [SECTIONS_LIST.CONFIGURATIONS]: object().required('Configuration is required'),
  [SECTIONS_LIST.DELIVERABLES]: object({
    [INPUT_NAMES.BACKLOG_TYPE]: string().required('Type of backlog is required'),
  }),
  [SECTIONS_LIST.RATES]: object({
    [INPUT_NAMES.MAN_HOUR_RATE_FOR_TESTER]: number()
      .nullable()
      .min(0, 'Man-hour rate for tester cannot be negative'),
    [INPUT_NAMES.MAN_HOUR_RATE_FOR_EXPERT]: number()
      .nullable()
      .min(0, 'Man-hour rate for expert cannot be negative'),
  }),
});
