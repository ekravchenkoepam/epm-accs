import React, { useState } from "react";
import { Button, Icon, Radio } from "semantic-ui-react";

import { Section } from "../../Section";
import { GroupLabel } from "../../../elements/GroupLabel";

import { CommonSectionProps } from "../types";
import { createOptionsForCategory } from "../../../helpers";
import { APPLICATIONS, PLATFORMS } from "../../../helpers/webApplicationsHelper";

import styles from "./SpecificContent.module.css";

export const Configurations: React.FC<CommonSectionProps> = ({ sectionType }) => {
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);

  const webApplications = {
    [APPLICATIONS.WEB_APPLICATION]: {
      [PLATFORMS.WINDOWS]: createOptionsForCategory(PLATFORMS.WINDOWS),
      [PLATFORMS.MACOS]: createOptionsForCategory(PLATFORMS.MACOS),
      [PLATFORMS.ANDROID_PHONE]: createOptionsForCategory(PLATFORMS.ANDROID_PHONE),
      [PLATFORMS.ANDROID_TABLET]: createOptionsForCategory(PLATFORMS.ANDROID_TABLET),
      [PLATFORMS.IOS]: createOptionsForCategory(PLATFORMS.IOS),
      [PLATFORMS.IPADOS]: createOptionsForCategory(PLATFORMS.IPADOS),
    },
    [APPLICATIONS.MOBILE_NATIVE_APPLICATION]: null,
    [APPLICATIONS.MOBILE_HYBRID_APPLICATION]: null,
  };

  const handleRadioChange = (applicationType: string) => {
    setSelectedApplication((prev) =>
      prev === applicationType ? null : applicationType
    );
  };

  return (
    <Section sectionType={sectionType}>
      <div>
        {Object.entries(webApplications).map(([applicationType, platforms]) => (
          <div key={applicationType} className={styles.applicationGroup}>
            <div className={styles.applicationHeader}>
              <Radio
                label={applicationType}
                checked={selectedApplication === applicationType}
                onChange={() => handleRadioChange(applicationType)}
              />
            </div>

            <div
              className={`${styles.platformsContainer} ${
                selectedApplication === applicationType ? styles.show : ""
              }`}
            >
              {platforms &&
                Object.entries(platforms).map(([platform, options]) => (
                  <div key={platform} className={styles.platformContainer}>
                    <GroupLabel text={platform} />
                    <div className={styles.applicationsContainer}>
                      {options.map((option) => (
                        <Button key={option} icon>
                          <Icon name="plus" />
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
