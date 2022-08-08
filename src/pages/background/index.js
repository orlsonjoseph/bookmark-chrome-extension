import {
  contextClick,
  extensionClicked,
  setContextMenus,
  openHome,
} from './actions';
import { getConfiguration, setConfiguration } from './../../common/interface';
import { OPEN_NODRAFT } from './../../actions';

// Initialization
chrome.runtime.onInstalled.addListener(function () {
  setContextMenus();
});

// Context Menu
chrome.contextMenus.onClicked.addListener(contextClick);

chrome.action.onClicked.addListener(extensionClicked);

// Messaging
chrome.runtime.onMessage.addListener((message, sender) => {
  const { type, payload } = message;
  const { tab } = sender;

  switch (type) {
    case OPEN_NODRAFT:
      openHome();
      return;
    default:
      return;
  }
});

// Exposes external endpoint for browser to set authentication token
chrome.runtime.onMessageExternal.addListener((request, sender) => {
  console.log('External Listener:', request);

  if (request.token)
    setConfiguration({ 'nodraft-extension-token': request.token });
});
