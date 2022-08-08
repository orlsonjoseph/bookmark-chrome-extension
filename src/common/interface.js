// Messaging
export function sendMessage(message) {
  chrome.runtime.sendMessage(message);
}

// Browser
export function openTabWithUrl(url, inBackground) {
  let makeTabActive = inBackground === true ? false : true;
  return chrome.tabs.create({ url: url, active: makeTabActive });
}

// Local Storage
export function getConfiguration(key) {
  return new Promise((resolve) => {
    chrome.storage.local.get([key], (result) => resolve(result[key]));
  });
}

export function setConfiguration(values) {
  chrome.storage.local.set(values);
}
