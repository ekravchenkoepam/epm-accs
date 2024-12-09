type Configuration = {
  [category: string]: {
    [platform: string]: string[];
  };
} | null;

export type FormValues = {
  targetStandard: {
    standard_type: string | null;
    conformance_level: string | null;
  };
  industry: {
    domain: string;
  };
  activities: {
    assessment_type: string | null;
    additional_activities: string[];
  };
  productPages: {
    unique_pages: number | null;
    templated_pages: number | null;
  };
  complexity: {
    product_complexity: string | null;
  };
  specificContent: {
    pdf_pages: number | null;
    email_templates: number | null;
  };
  interfaceLanguages: {
    languages: string[] | null;
    has_several_directions: boolean | null;
  };
  configurations: Configuration | null,
  deliverables: {
    backlog_type: string | null;
    additional_deliverables: {
      vpat: string;
      test_result_report: string;
    }
  };
  rates: {
    man_hour_rate_for_tester: number | null;
    man_hour_rate_or_expert: number | null;
  };
}
