import { customRequest } from '../request/request';

export function saveBookmark(saveObject) {
  const { tabId, title, favIconUrl, url } = saveObject;

  return customRequest(
    {
      path: 'bookmark/create',
      data: { url, title, favIconUrl },
    },
    false
  ).then((data) => {
    return data ? { saveObject, status: 'ok', response: data } : undefined;
  });
}
