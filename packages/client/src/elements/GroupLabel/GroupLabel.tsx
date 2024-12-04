import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';

import InfoIcon from '../../assets/info.svg';
import { BasicModal } from '../BasicModal';

import styles from './GroupLabel.module.css';

type GroupLabelProps = {
  text: string;
  infoText?: string;
  hasInfoHint?: boolean;
  isOptional?: boolean;
  htmlFor?: string;
}

export const GroupLabel: React.FC<GroupLabelProps> = ({
  text,
  infoText,
  hasInfoHint,
  isOptional,
  htmlFor,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.groupLabelContainer}>
      <label className={styles.groupLabelText} htmlFor={htmlFor}>
        {text}
      </label>
      {isOptional && (
        <div className={styles.sectionTitle}>
          (optional)
        </div>
      )}
      {hasInfoHint && (
        <Image
          className={styles.infoIcon}
          src={InfoIcon}
          alt='info-icon'
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
