import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
// VIEW
import Home from './components/home'
import About from './components/about'
import ForTest from './components/for_test'



export default class App extends Component {

    render() {

        return(
            <Router>
                <Scene key='root'>
                    <Scene key='Home' component={Home} title='Fonov' initial={true}/>
                    <Scene key='About' component={About} title='О Тесте'/>
                    <Scene key='ForTest' component={ForTest} title='Что нужно для теста'/>
                </Scene>
            </Router>
        )
    }

}