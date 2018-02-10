import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { store, history } from '../redux/store'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import {init_localize} from '../actions/localize'
import { CookiesProvider } from 'react-cookie';
//Component
import Home from './home'
import About from './tests/About'
import Appearance from './tests/Appearance'
import WaterSensor from './tests/WaterSensor'
import ButtonsAndVibration from './tests/ButtonsAndVibration'
import Sensor from './tests/Sensor'
import Touch3D from './tests/Touch3D'
import iCloud from './tests/iCloud'
import Flash from './tests/Flash'
import Speaker from './tests/Speaker'
import CompassAndGsensor from './tests/CompassAndGsensor'
import Camera from './tests/Camera'
import HeadphoneJack from './tests/HeadphoneJack'
import TouchIDorFaceID from './tests/TouchIDorFaceID'
import WiFi from './tests/WiFi'
import Bluetooth from './tests/Bluetooth'
import Microphone from './tests/Microphone'
import CallAndProximitySensor from './tests/CallAndProximitySensor'
import Charging from './tests/Charging'
import Warranty from './tests/Warranty'
import IMEI from './tests/IMEI'
import Package from './tests/Package'
import TestResult from './testResult'
// URLS
import URLS from '../constant/urls'


export default class App extends Component {

    render () {

        const _store = store();
        _store.dispatch(init_localize());

        return (
            <Provider store={_store}>
                <ConnectedRouter history={history}>
                    <CookiesProvider>
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
                    </CookiesProvider>
                </ConnectedRouter>
            </Provider>
        )
    }
}