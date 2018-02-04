import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/index.js'
//CSS
import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';
import './assets/css/fonov_test.css'
//Sentry
import Raven from 'raven-js';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();

if (process.env.NODE_ENV !== 'development') {
    Raven.config('https://fa8991ecd0fc44beb7daa608ffe5d886@sentry.io/275162').install();
}