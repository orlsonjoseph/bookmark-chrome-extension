import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';

import { getConfiguration, openTabWithUrl } from '../../common/interface';
import {
  NODRAFT_AUTH,
  LOGOUT_URL,
  SET_SHORTCUTS,
} from '../../common/constants';

const OptionsApp = () => {
  const [token, setToken] = useState();

  useEffect(async () => {
    setToken(await getConfiguration('nodraft-extension-token'));
  }, []);

  const loginAction = () => openTabWithUrl(AUTH_URL);
  const logoutAction = () => openTabWithUrl(LOGOUT_URL);
  const setShortcuts = () => openTabWithUrl(SET_SHORTCUTS);

  return (
    <div>
      <section>
        <header>
          nodraft
          <h1>{chrome.i18n.getMessage('options_header')}</h1>
        </header>

        <footer>
          <div>
            <a>Need help?</a>
            <a>Email us</a>
            <div>Follow our socials</div>
          </div>

          <div>Copyright</div>
        </footer>
      </section>
    </div>
  );
};

const root = document.getElementById('nodraft-extension-root');
ReactDOM.render(<OptionsApp />, root);
