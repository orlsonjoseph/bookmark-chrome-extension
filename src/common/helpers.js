import { getConfiguration } from './interface';

export function isSystemPage(tab) {
  return tab.active && isSystemLink(tab.url);
}

export function isSystemLink(link) {
  return (
    link.startsWith('chrome-extension://') ||
    link.startsWith('chrome-search://') ||
    link.startsWith('chrome://')
  );
}

export async function retrieveToken() {
  return await getConfiguration('nodraft-extension-token');
}

export function getOSModeClass() {
  if (!window.matchMedia) return 'light';

  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isLightMode = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches;
  const isNotSpecified = window.matchMedia(
    '(prefers-color-scheme: no-preference)'
  ).matches;
  const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;
  let mode;

  if (isLightMode) mode = 'light';
  if (isDarkMode) mode = 'dark';

  // fallback if no system setting
  if (isNotSpecified || hasNoSupport) mode = 'light';

  return mode;
}
