import React, { useState } from 'react';
import { Image } from "semantic-ui-react";

import InfoIcon from "../../assets/info.svg";
import { BasicModal } from "../BasicModal";

import styles from "./GroupLabel.module.css";

type GroupLabelProps = {
  sectionType: string;
  text: string;
  infoText?: string;
  hasInfoHint?: boolean
}

export const GroupLabel: React.FC<GroupLabelProps> = ({
  sectionType,
  text,
  infoText,
  hasInfoHint
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.groupLabelContainer}>
      <div className={styles.groupLabelText}>{text}</div>
      {hasInfoHint && (
        <Image
          className={styles.infoIcon}
          src={InfoIcon}
          alt="info-icon"
          onClick={() => setIsModalOpen(true)}
        />
      )}
      <BasicModal
        isOpen={isModalOpen}
        title={text}
        content={infoText}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
