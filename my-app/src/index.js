import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import regeneratorRuntime from "regenerator-runtime";
import { PersistGate } from 'redux-persist/integration/react'

import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import { initReactI18next  } from 'react-i18next';

i18next
  .use(initReactI18next)
  .use(XHR)
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading="Loading...">
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
