import React from 'react';
import { Button, Icon, Image } from 'semantic-ui-react';

import BadgeIcon from '../../assets/badge.svg';

import styles from './Chip.module.css';

type ChipProps = {
  value: string;
  isSelected?: boolean;
  isPopular?: boolean;
  onClick: () => void;
}

export const Chip = ({
  value,
  isSelected,
  isPopular,
  onClick
}: ChipProps) => {
  const chipIcon = isSelected ? 'check' : 'plus'

  return (
    <div className={styles.chipContainer}>
      <Button
        icon
        basic
        className={`
          ${styles.chipButton}
          ${isSelected ? styles.selected : ''}
        `}
        onClick={onClick}
      >
        <Icon name={chipIcon} />
        {value}
      </Button>
      {isPopular && (
        <Image
          className={styles.badgeIcon}
          src={BadgeIcon}
          alt='badge-icon'
        />
      )}
    </div>
  );
};
