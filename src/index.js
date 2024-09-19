import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-maawv4gtd3xb.us.frontegg.com', 
  clientId: '105cd86e-8d38-4a3e-b906-40fdbdbcee74',                   
  appId: 'b13d175c-ab28-4250-884a-2959c6e434db',

  tenantResolver: () => ({
    tenant: new URLSearchParams(window.location.search).get("organization"),
  }),
};


const authOptions = {
 keepSessionAlive: true 
};


ReactDOM.render(
    <FronteggProvider 
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
      entitlementsOptions={{ enabled: true }}
    >
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);