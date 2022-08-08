import { API_URL } from '../../constants';
import { retrieveToken } from '../../helpers';
import { getConfiguration } from '../../interface';

async function customRequest(options, skipAuth) {
  if (!skipAuth) var token = await retrieveToken();

  const headers = new Headers({
    'X-Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Token ' + token,
  });

  const fetchSettings = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(options.data),
  };

  return fetch(API_URL + options.path, fetchSettings)
    .then(handleErrors)
    .then(handleSuccess);
}

function handleErrors(response) {
  const xErrorCode = response.headers.get('x-error-code');
  const xError = response.headers.get('x-error');

  if (!response.ok) return Promise.reject({ xErrorCode, xError });
  return response;
}

function handleSuccess(response) {
  return response ? response.json() : false;
}

export { customRequest };
