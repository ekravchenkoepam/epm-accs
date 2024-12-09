import React, { useContext, useEffect, useState } from 'react';
import { Grid, Image, Radio } from 'semantic-ui-react';
import {useFormikContext} from "formik";

import BadgeIcon from '../../../assets/badge.svg';

import { Section } from '../../Section';
import { Chip } from '../../../elements/Chip';
import { BasicModal } from '../../../elements/BasicModal';

import { CommonSectionProps } from '../types';
import { FormValues } from "../../../types";
import { CalculationProvider } from '../../../pages/Calculation/CalculationProvider';
import {
  APPLICATIONS,
  PLATFORMS,
  getApplicationDisplayName,
  getPlatformDisplayName,
  getWebApplications,
  checkIfPopularConfiguration
} from '../../../helpers/webApplicationsHelper';

import styles from './Configurations.module.css';
import locales from '../../../locales/en.json'
import InfoIcon from '../../../assets/info.svg';

const webApplications = getWebApplications();

export const Configurations: React.FC<CommonSectionProps> = ({ sectionType }) => {
  const { updateConfiguration, formState } = useContext(CalculationProvider)
  const { errors, touched } = useFormikContext<FormValues>();

  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);
  const [selectedChips, setSelectedChips] = useState<Record<string, string[]>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const configurations = formState.configurations || {};
    const initialApplication =
      Object.keys(configurations).length > 0 ? Object.keys(configurations)[0] : null;

    if (initialApplication && !selectedApplication) {
      const platforms = configurations[initialApplication] as Record<string, string[]>;
      const initialChips = Object.fromEntries(
        Object.entries(platforms).map(([platform, options]) => [platform, options])
      );

      setSelectedApplication(initialApplication);
      setSelectedChips(initialChips);
    }
  }, [formState.configurations, selectedApplication]);

  useEffect(() => {
    if (selectedApplication) {
      updateConfiguration(selectedApplication, selectedChips);
    }
  }, [selectedApplication, selectedChips]);

  const handleRadioChange = (applicationType: string) => {
    setSelectedApplication((prev) =>
      prev === applicationType ? null : applicationType
    );

    setSelectedChips({})
  };

  const handleChipClick = (platform: string, option: string) => {
    setSelectedChips((prev) => {
      const platformChips = prev[platform] || [];

      if (platformChips.includes(option)) {
        return {
          ...prev,
          [platform]: platformChips.filter((chip) => chip !== option),
        };
      }
      return {
        ...prev,
        [platform]: [...platformChips, option],
      };
    });
  };

  return (
    <Section sectionType={sectionType}>
      <Grid className={styles.chipsContainer}>
        <h5 className={styles.chooseConfiguration}>
          {locales.configurations.chooseConfiguration}
        </h5>

        {Object.entries(webApplications).map(([applicationType, platforms]) => (
          <div key={applicationType} className={styles.applicationGroup}>
            <div className={styles.applicationHeader}>
              <Radio
                label={getApplicationDisplayName(applicationType as APPLICATIONS)}
                checked={selectedApplication === applicationType}
                onChange={() => handleRadioChange(applicationType)}
              />
            </div>

            <div className={`
              ${styles.platformsContainer}
              ${platforms && selectedApplication === applicationType ? styles.show : ''}
            `}>
              {platforms && (
                <React.Fragment>
                  <div className={styles.popularBlock}>
                    <Image
                      src={BadgeIcon}
                      className={styles.starBadge}
                      alt='badge-icon'
                    />
                    <p>{locales.configurations.mostPopularConfigurations}</p>
                  </div>
                  {Object.entries(platforms).map(([platform, options]) => (
                    <div key={platform} className={styles.platformContainer}>
                      {
                        <div className={styles.platformName}>
                          <div>
                            {getPlatformDisplayName(platform as PLATFORMS)}
                          </div>
                          {platform === PLATFORMS.WINDOWS && (
                            <Image
                              className={styles.infoIcon}
                              src={InfoIcon}
                              alt='info-icon'
                              onClick={() => setIsModalOpen(true)}
                            />
                          )}
                        </div>
                      }
                      <div className={styles.applicationsContainer}>
                        {options.map((option) => (
                          <Chip
                            key={option}
                            value={option}
                            isSelected={selectedChips[platform]?.includes(option)}
                            isPopular={checkIfPopularConfiguration(platform as PLATFORMS, option)}
                            onClick={() => handleChipClick(platform, option)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              )}
            </div>
          </div>
        ))}

        {errors.configurations && (
          <p className={styles.errorMessage}>{errors.configurations}</p>
        )}

        <BasicModal
          isOpen={isModalOpen}
          title={locales.configurations.webApplicationWindowsLabel}
          content={locales.configurations.webApplicationWindowsHint}
          onClose={() => setIsModalOpen(false)}
        />
    </Grid>
</Section>
  );
};
