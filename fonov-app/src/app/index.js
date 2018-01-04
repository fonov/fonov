import React from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom'
//CSS
import 'bootstrap/dist/css/bootstrap.css';
//Component
import Home from './component/home'
import About from './component/tests/About'
import Appearance from './component/tests/Appearance'
import WaterSensor from './component/tests/WaterSensor'
import ButtonsAndVibration from './component/tests/ButtonsAndVibration'
import Sensor from './component/tests/Sensor'
import Touch3D from './component/tests/Touch3D'
import iCloid from './component/tests/iCloid'
import Flash from './component/tests/Flash'
import Speaker from './component/tests/Speaker'
import CompassAndGsensor from './component/tests/CompassAndGsensor'
import Camera from './component/tests/Camera'
import HeadphoneJack from './component/tests/HeadphoneJack'
import TouchIDorFaceID from './component/tests/TouchIDorFaceID'
import WiFi from './component/tests/WiFi'
import Bluetooth from './component/tests/Bluetooth'
import Microphone from './component/tests/Microphone'
import CallAndProximitySensor from './component/tests/CallAndProximitySensor'
import Charging from './component/tests/Charging'
import Warranty from './component/tests/Warranty'
import IMEI from './component/tests/IMEI'
import Picking from './component/tests/Picking'
import TestResult from './component/testResult'
// Elements
import {Modal} from './elements/index'
// URLS
import URLS from './constant/urls'


const App = () =>  (
    <Container style={{padding: 25}}>
        <Route exact path={URLS.Home} component={Home}/>
        <Route path={URLS.About} component={About} />
        <Route path={URLS.Appearance} component={Appearance} />
        <Route path={URLS.WaterSensor} component={WaterSensor} />
        <Route path={URLS.ButtonsAndVibration} component={ButtonsAndVibration} />
        <Route path={URLS.Sensor} component={Sensor} />
        <Route path={URLS.Touch3D} component={Touch3D} />
        <Route path={URLS.iCloid} component={iCloid} />
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
        <Route path={URLS.Picking} component={Picking} />
        <Route path={URLS.TestResult} component={TestResult} />
        <Modal/>
    </Container>
);

export default App