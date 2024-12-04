export enum INPUT_NAMES {
  STANDARD_TYPE = 'standard_type',
  CONFORMANCE_LEVEL = 'conformance_level',
  DOMAIN = 'domain',
  ASSESSMENT_TYPE = 'assignment_type',
  ADDITIONAL_ACTIVITIES = 'additional_activities',
  UNIQUE_PAGES = 'unique_pages',
  TEMPLATED_PAGES = 'templated_pages',
  PRODUCT_COMPLEXITY = 'product_complexity',
  PDF_PAGES = 'pdf_pages',
  EMAIL_TEMPLATES = 'email_templates',
  LANGUAGES = 'languages',
  HAS_SEVERAL_DIRECTIONS = 'has_several_directions',
  BACKLOG_TYPE = 'backlog_type',
  MAN_HOUR_RATE_FOR_TESTER = 'man_hour_rate_for_tester',
  MAN_HOUR_RATE_FOR_EXPERT = 'man_hour_rate_or_expert',
}

export enum WCAG_STANDARDS {
  VERSION_2_0 = "WCAG 2.0",
  VERSION_2_1 = "WCAG 2.1",
  VERSION_2_2 = "WCAG 2.2",
}

export enum CONFORMANCE_LEVEL {
  A = "A",
  AA = "AA",
  AAA = "AAA",
}

export enum DOMAINS {
  BUSINESS_INFORMATION = 'businessInformation',
  EDUCATION = 'education',
  FINANCIAL_SERVICES = 'financialServices',
  GOVERNMENT = 'government',
  LIFE_SCIENCES_HEALTHCARE = 'lifeSciencesHealthcare',
  MANUFACTURING_AUTO = 'manufacturingAuto',
  PROFESSIONAL_SERVICES = 'professionalServices',
  RETAIL_DISTRIBUTION = 'retailDistribution',
  SOFTWARE_HI_TECH = 'softwareHiTech',
  TELECOMMUNICATION = 'telecommunication',
  TRAVEL_HOSPITALITY = 'travelHospitality',
  OTHER = 'other',
}

export const DOMAINS_TEXT_MAP = {
  [DOMAINS.BUSINESS_INFORMATION]: 'Business Information & Media',
  [DOMAINS.EDUCATION]: 'Education',
  [DOMAINS.FINANCIAL_SERVICES]: 'Financial Services',
  [DOMAINS.GOVERNMENT]: 'Government',
  [DOMAINS.LIFE_SCIENCES_HEALTHCARE]: 'Life Sciences & Healthcare',
  [DOMAINS.MANUFACTURING_AUTO]: 'Manufacturing & Auto',
  [DOMAINS.PROFESSIONAL_SERVICES]: 'Professional Services',
  [DOMAINS.RETAIL_DISTRIBUTION]: 'Retail & Distribution',
  [DOMAINS.SOFTWARE_HI_TECH]: 'Software & Hi-Tech',
  [DOMAINS.TELECOMMUNICATION]: 'Telecommunication',
  [DOMAINS.TRAVEL_HOSPITALITY]: 'Travel & Hospitality',
  [DOMAINS.OTHER]: 'Other',
};

export const DOMAINS_OPTIONS = Object.entries(DOMAINS_TEXT_MAP).map(([key, text]) => {
  return {
    key,
    text,
    value: key,
  };
});

export enum ASSESSMENT_TYPES {
  FULL_ASSESSMENT = 'Full assessment',
  RAPID_ASSESSMENT = 'Rapid assessment',
}

export enum ACTIVITY_TYPES {
  REMEDIATION_RECOMMENDATIONS = 'Remediation recommendations on fix',
  BUG_FIXES_VERIFICATION = 'Bug fixes verification',
  SPOT_CHECKS_BY_EXPERT = 'Spot checks by an expert',
}

export enum ADDITIONAL_ACTIVITIES {
  REMEDIATION= 'Remediation recommendations on fix',
  BUG_FIXES_VERIFICATION= 'Bug fixes verification',
  SPOT_CHECKS= 'Spot checks by an expert',
}

export enum UNIQUE_PAGES {
  DEFAULT_PAGE = 'Default page',
}

export enum TEMPLATED_PAGES {
  DEFAULT_PAGE = 'Default page',
}

export enum PDF_PAGES {
  DEFAULT_PAGE = 'Default page',
}

export enum EMAIL_TEMPLATES {
  DEFAULT_TEMPLATE = 'Default page',
}

export enum INTERFACE_LANGUAGES {
  DEFAULT_LANGUAGE = 'Product has several reading directions',
}

export enum BACKLOG_TYPES {
  DETAILED = 'Detailed',
  HIGH_LEVEL = 'High-level',
}

export enum ADDITIONAL_DELIVERABLES {
  VPAT = 'VPAT',
  TEST_RESULT_REPORT = 'Test result report'
}

export enum LEVELS {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}
