import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import { Framework7App } from 'framework7-react';
import {init_localize} from './actions/localize'
import { CookiesProvider } from 'react-cookie';
//CSS
import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';
import './assets/css/fonov_test.css'
//Component
import Home from './components/home'
import About from './components/tests/About'
import Appearance from './components/tests/Appearance'
import WaterSensor from './components/tests/WaterSensor'
import ButtonsAndVibration from './components/tests/ButtonsAndVibration'
import Sensor from './components/tests/Sensor'
import Touch3D from './components/tests/Touch3D'
import iCloud from './components/tests/iCloud'
import Flash from './components/tests/Flash'
import Speaker from './components/tests/Speaker'
import CompassAndGsensor from './components/tests/CompassAndGsensor'
import Camera from './components/tests/Camera'
import HeadphoneJack from './components/tests/HeadphoneJack'
import TouchIDorFaceID from './components/tests/TouchIDorFaceID'
import WiFi from './components/tests/WiFi'
import Bluetooth from './components/tests/Bluetooth'
import Microphone from './components/tests/Microphone'
import CallAndProximitySensor from './components/tests/CallAndProximitySensor'
import Charging from './components/tests/Charging'
import Warranty from './components/tests/Warranty'
import IMEI from './components/tests/IMEI'
import Package from './components/tests/Package'
import TestResult from './components/testResult'
// URLS
import URLS from './constant/urls'
//Sentry
import Raven from 'raven-js';


if (process.env.NODE_ENV !== 'development') {
    Raven.config('https://fa8991ecd0fc44beb7daa608ffe5d886@sentry.io/275162').install();
}
// Store
const _store = store();
// Location
_store.dispatch(init_localize());

ReactDOM.render(
    <Provider store={_store}>
        <ConnectedRouter history={history}>
            <CookiesProvider>
                <Framework7App themeType="ios">
                    <Route exact path={URLS.Home} component={Home}/>
                    <Route path={URLS.About} component={About} />
                    <Route path={URLS.Appearance} component={Appearance} />
                    <Route path={URLS.WaterSensor} component={WaterSensor} />
                    <Route path={URLS.ButtonsAndVibration} component={ButtonsAndVibration} />
                    <Route path={URLS.Sensor} component={Sensor} />
                    <Route path={URLS.Touch3D} component={Touch3D} />
                    <Route path={URLS.iCloud} component={iCloud} />
                    <Route path={URLS.Flash} component={Flash} />
                    <Route path={URLS.Speaker} component={Speaker} />
                    <Route path={URLS.CompassAndGsensor} component={CompassAndGsensor} />
                    <Route path={URLS.Camera} component={Camera} />
                    <Route path={URLS.HeadphoneJack} component={HeadphoneJack} />
                    <Route path={URLS.TouchIDorFaceID} component={TouchIDorFaceID} />
                    <Route path={URLS.WiFi} component={WiFi} />
                    <Route path={URLS.Bluetooth} component={Bluetooth} />
                    <Route path={URLS.Microphone} component={Microphone} />
                    <Route path={URLS.CallAndProximitySensor} component={CallAndProximitySensor} />
                    <Route path={URLS.Charging} component={Charging} />
                    <Route path={URLS.Warranty} component={Warranty} />
                    <Route path={URLS.IMEI} component={IMEI} />
                    <Route path={URLS.Package} component={Package} />
                    <Route path={URLS.TestResult} component={TestResult} />
                </Framework7App>
            </CookiesProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();