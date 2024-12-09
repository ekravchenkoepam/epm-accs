import React, {useState, useEffect, useContext, useRef} from 'react';
import { Checkbox, Grid, Radio } from 'semantic-ui-react';

import { Section } from '../../Section';
import { RadioButton } from '../../../elements/RadioButton';
import { InputButtonGroup } from '../../InputButtonGroup';
import { GroupLabel } from '../../../elements/GroupLabel';

import { CommonSectionProps } from '../types';
import {
  ADDITIONAL_DELIVERABLES, ADDITIONAL_DELIVERABLES_KEYS,
  BACKLOG_TYPES,
  DELIVERABLE_TYPES,
  INPUT_NAMES,
} from '../constants';
import { SECTIONS_LIST } from '../SectionsList/constants';

import { CalculationProvider } from '../../../pages/Calculation/CalculationProvider';

import locales from '../../../locales/en.json';
import {ErrorMessage} from "../../ErrorMessage";

type DeliverableConfig = {
  [key in ADDITIONAL_DELIVERABLES_KEYS]: {
    isToggled: boolean;
    name: string;
    options: { label: DELIVERABLE_TYPES; value: DELIVERABLE_TYPES; isSelected: boolean }[];
  };
};

const initialDeliverablesConfig: DeliverableConfig = {
  [ADDITIONAL_DELIVERABLES_KEYS.VPAT]: {
    isToggled: false,
    name: ADDITIONAL_DELIVERABLES.VPAT,
    options: [
      { label: DELIVERABLE_TYPES.BY_TESTER, value: DELIVERABLE_TYPES.BY_TESTER, isSelected: false },
      { label: DELIVERABLE_TYPES.BY_EXPERT, value: DELIVERABLE_TYPES.BY_EXPERT, isSelected: false },
    ],
  },
  [ADDITIONAL_DELIVERABLES_KEYS.TEST_RESULT_REPORT]: {
    isToggled: false,
    name: ADDITIONAL_DELIVERABLES.TEST_RESULT_REPORT,
    options: [
      { label: DELIVERABLE_TYPES.BY_TESTER, value: DELIVERABLE_TYPES.BY_TESTER, isSelected: false },
      { label: DELIVERABLE_TYPES.BY_EXPERT, value: DELIVERABLE_TYPES.BY_EXPERT, isSelected: false },
    ],
  },
};

export const Deliverables: React.FC<CommonSectionProps> = ({ sectionType }) => {
  const { formState, updateFormState } = useContext(CalculationProvider);

  const [deliverablesConfig, setDeliverablesConfig] = useState<DeliverableConfig>(initialDeliverablesConfig);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return; // Prevents updates on subsequent renders

    const deliverables = formState.deliverables.additional_deliverables;
    const updatedConfig = { ...deliverablesConfig };

    if (!deliverables) return;

    Object.entries(deliverables).forEach(([key, value]) => {
      const deliverableKey = key as keyof DeliverableConfig;

      updatedConfig[deliverableKey].isToggled = true;

      updatedConfig[deliverableKey].options = updatedConfig[deliverableKey].options.map((option) => {
        return {
          ...option,
          isSelected: option.value === value,
        };
      });
    });

    setDeliverablesConfig(updatedConfig);

    initialized.current = true;
  }, [formState.deliverables.additional_deliverables]);


  const handleToggle = (key: keyof DeliverableConfig) => {
    setDeliverablesConfig((prev) => {
      const isCurrentlyToggled = prev[key].isToggled;

      const updatedConfig = {
        ...prev,
        [key]: {
          ...prev[key],
          isToggled: !isCurrentlyToggled,
          options: prev[key].options.map((option) => ({
            ...option,
            isSelected: false,
          })),
        },
      };

      const updatedDeliverables = {
        ...formState.deliverables.additional_deliverables,
        [key]: isCurrentlyToggled ? undefined : '',
      };

      updateFormState('deliverables', {
        ...formState.deliverables,
        additional_deliverables: updatedDeliverables,
      });

      return updatedConfig;
    });
  };

  const handleOptionSelect = (key: keyof DeliverableConfig, optionValue: DELIVERABLE_TYPES) => {
    setDeliverablesConfig((prev) => {
      const updatedConfig = {
        ...prev,
        [key]: {
          ...prev[key],
          options: prev[key].options.map((option) => ({
            ...option,
            isSelected: option.value === optionValue,
          })),
        },
      };

      const updatedDeliverables = {
        ...formState.deliverables.additional_deliverables,
        [key]: optionValue,
      };

      console.log({ updatedDeliverables })

      updateFormState('deliverables', {
        ...formState.deliverables,
        additional_deliverables: updatedDeliverables,
      });

      return updatedConfig;
    });
  };

  return (
    <Section sectionType={sectionType}>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <InputButtonGroup
              inputType="radio"
              label={locales.deliverables.typeOfBacklog}
              options={Object.values(BACKLOG_TYPES)}
              sectionType={SECTIONS_LIST.DELIVERABLES}
              subSectionType={INPUT_NAMES.BACKLOG_TYPE}
              infoText={locales.deliverables.typeOfBacklogHint}
              ButtonComponent={RadioButton}
            />
            <ErrorMessage
              sectionType={SECTIONS_LIST.DELIVERABLES}
              subSectionType={INPUT_NAMES.BACKLOG_TYPE}
            />
          </Grid.Column>
          <Grid.Column>
            <GroupLabel
              text={locales.deliverables.additionalDeliverables}
              infoText={locales.deliverables.additionalDeliverablesHint}
              isOptional
              hasInfoHint
            />

            <div style={{ display: 'flex', gap: '40px' }}>
              {Object.entries(deliverablesConfig).map(([key, config]) => (
                <div key={key}>
                  <Checkbox
                    toggle
                    label={config.name}
                    checked={config.isToggled}
                    onChange={() => handleToggle(key as keyof DeliverableConfig)}
                  />

                  {config.isToggled && (
                    <div style={{ marginTop: '10px', paddingLeft: '20px' }}>
                      {config.options.map((option) => (
                        <div key={option.value} style={{ marginBottom: '10px' }}>
                          <Radio
                            label={option.label}
                            checked={option.isSelected}
                            onChange={() => handleOptionSelect(key as keyof DeliverableConfig, option.value)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Section>
  );
};
