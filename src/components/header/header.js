import React from 'react';
import './header.css';

import { Button } from '../button/button';

export const Header = ({ saveStatus, removeAction, saveAction }) => {
  const isLoading = ['saving', 'removing'].includes(saveStatus);
  const hasError = ['save_failed', 'remove_failed'].includes(saveStatus);

  return (
    <div className="nodraft-header">
      <div className="nodraft-status">
        <div className="nodraft-status-message">
          {"Saved successfully!"}
        </div>
      </div>

      {!hasError && saveStatus !== 'removed' ? (
        <Button type='inline' onClick={removeAction}>
          {'Remove'}
        </Button>
      ) : null}

      {saveStatus === 'removed' ? (
        <Button type='primary' onClick={saveAction}>
          {'Save'}
        </Button>
      ) : null}
    </div>
  );
};
