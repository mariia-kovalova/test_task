import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
// import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'shared/styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Global styles={GlobalStyles} />
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
