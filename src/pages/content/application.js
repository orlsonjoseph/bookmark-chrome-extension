import {
  SAVE_TO_NODRAFT_REQUEST,
  SAVE_TO_NODRAFT_SUCCESS,
  SAVE_TO_NODRAFT_FAILURE,
} from '../../actions';

import { getOSModeClass } from '../../common/helpers';
import { getConfiguration } from '../../common/interface';

import { Canvas } from '../../components/canvas/canvas';
import { Header } from '../../components/header/header';

import React, { useState, useEffect, useRef } from 'react';

export const App = () => {
  const appTarget = useRef(null);

  const [theme, setTheme] = useState('nodraft-theme-system');
  const [saveStatus, setSaveStatus] = useState('saving');
  const [isOpen, setIsOpen] = useState(false);

  const handleMessages = (event) => {
    const { payload, action = 'Unknown Action' } = event || {};

    switch (action) {
      case SAVE_TO_NODRAFT_REQUEST: {
        setIsOpen(true);
        return setSaveStatus('saving');
      }

      case SAVE_TO_NODRAFT_SUCCESS: {
        return setSaveStatus('saved');
      }

      case SAVE_TO_NODRAFT_FAILURE: {
        return setSaveStatus('save_failed');
      }

      default:
        return;
    }
  };

  useEffect(async () => {
    let newTheme = (await getConfiguration('theme')) || 'system';
    if (newTheme === 'system') newTheme = getOSModeClass();
    setTheme(`nodraft-theme-${newTheme}`);
  }, []);

  const handleDocumentClick = (e) => {
    if (appTarget?.current?.contains(e.target)) return;
    setIsOpen(false);
  };

  const keyPress = (e) => {
    // keyCode 27 === ESCAPE
    if (e.keyCode === 27) setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(true);

    chrome.runtime.onMessage.addListener(handleMessages);
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keyup', keyPress);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessages);
      document.removeEventListener('click', handleDocumentClick);
      document.addEventListener('keyup', keyPress);
    };
  }, []);

  const closePanel = () => setIsOpen(false);

  const isRemoved = saveStatus === 'removed';

  return (
    <div ref={appTarget} className={`nodraft-extension ${theme}`}>
      <Canvas isOpen={isOpen}>
        <Header saveStatus={saveStatus} />
        {/* {!isRemoved ? <ItemPreviewConnector /> : null}
            {!isRemoved ? <TaggingConnector closePanel={closePanel} /> : null}
            <FooterConnector /> */}
      </Canvas>
    </div>
  );
};
