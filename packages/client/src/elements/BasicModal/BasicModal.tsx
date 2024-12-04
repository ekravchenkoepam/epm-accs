import React from 'react';
import { Button, Modal } from 'semantic-ui-react'

import { formatTextWithBreaks } from "../../helpers/formatTextWithBreaks";

import styles from './BasicModal.module.css'

type BasicModalProps = {
  isOpen?: boolean;
  title: string;
  content?: string;
  onClose: () => void;
}

export const BasicModal: React.FC<BasicModalProps> = ({
  isOpen,
  title,
  content,
  onClose
}) => {
  const formattedText = formatTextWithBreaks({ content });

  return (
    <Modal
      closeIcon
      size={'small'}
      centered
      open={isOpen}
      onClose={() => {}}
      closeOnEscape
      closeOnDimmerClick={true}
    >
      <Modal.Header>
        {title}
      </Modal.Header>
      <Modal.Content>
        <div
          dangerouslySetInnerHTML={{
            __html: formattedText || '',
          }}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='black' onClick={onClose}>
          Cancel
        </Button>
        <Button className={styles.actionButton} onClick={() => {}}>
          Action
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
