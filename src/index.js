// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-maawv4gtd3xb.us.frontegg.com',
  clientId: '105cd86e-8d38-4a3e-b906-40fdbdbcee74',
  appId: 'b13d175c-ab28-4250-884a-2959c6e434db',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>
);

reportWebVitals();
