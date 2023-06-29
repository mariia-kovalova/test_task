import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'shared/styles/GlobalStyles';
import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Global styles={GlobalStyles} />
    <App />
  </Provider>
  // </React.StrictMode>
);
