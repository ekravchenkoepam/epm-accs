import React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import Markdown from 'react-markdown'

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
  return (
    <Modal
      closeIcon
      size={'small'}
      centered
      open={isOpen}
      onClose={onClose}
      closeOnEscape
      closeOnDimmerClick={true}
      className={styles.basicModal}
    >
      <Modal.Header>
        {title}
      </Modal.Header>
      <Modal.Content>
        <Markdown
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </Markdown>
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
