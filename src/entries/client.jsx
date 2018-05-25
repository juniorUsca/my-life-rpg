import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/app.jsx'

const container = document.getElementById('render-target');

ReactDOM.hydrate(<App />, container);
