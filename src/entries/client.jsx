import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from '../app/app.jsx'
import store from '../redux/store'

const container = document.getElementById('render-target');

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
