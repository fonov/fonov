import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
// VIEW
import Home from './components/home'
import About from './components/about'
import ForTest from './components/for_test'
import Test1 from './components/test1'
import Test2 from './components/test2'
import Test3 from './components/test3'
import Test4 from './components/test4'
import Test5 from './components/test5'
import Test6 from './components/test6'
import Test7 from './components/test7'
import Test8 from './components/test8'
import Test9 from './components/test9'
import Test10 from './components/test10'
import Test11 from './components/test11'
import Test12 from './components/test12'
import Test13 from './components/test13'
import Test14 from './components/test14'
import Test15 from './components/test15'
import Test16 from './components/test16'
import Test17 from './components/test17'
import Test18 from './components/test18'
import Test19 from './components/test19'
import Test20 from './components/test20'
import Test21 from './components/test21'
import TestResult from './components/test_result'


export default class App extends Component {

    render() {

        return(
            <Router>
                <Scene key='root'>
                    <Scene key='Home' component={Home} title='Fonov' initial={false}/>
                    <Scene key='About' component={About} title='О Тесте'/>
                    <Scene key='ForTest' component={ForTest} title='Что нужно для теста'/>
                    <Scene key='Test1' component={Test1} title='Внешний вид' initial={false}/>
                    <Scene key='Test2' component={Test2} title='Определение ремонта' initial={false}/>
                    <Scene key='Test3' component={Test3} title='Проверка на попадание влаги' initial={false}/>
                    <Scene key='Test4' component={Test4} title='Характеристик iPhone' initial={false}/>
                    <Scene key='Test5' component={Test5} title='Проверка iCloud Lock' initial={false} />
                    <Scene key='Test6' component={Test6} title='Проверка кнопок' initial={false} />
                    <Scene key='Test7' component={Test7} title='Проверка вспышки' initial={false}/>
                    <Scene key='Test8' component={Test8} title='Проверка камеры' initial={false}/>
                    <Scene key='Test9' component={Test9} title='Проверка динамиков' initial={false}/>
                    <Scene key='Test10' component={Test10} title='Наушников' initial={false}/>
                    <Scene key='Test11' component={Test11} title='Датчика освешености' initial={true}/>
                    <Scene key='Test12' component={Test12} title='Test12'/>
                    <Scene key='Test13' component={Test13} title='Test13'/>
                    <Scene key='Test14' component={Test14} title='Test14'/>
                    <Scene key='Test15' component={Test15} title='Test15'/>
                    <Scene key='Test16' component={Test16} title='Test16'/>
                    <Scene key='Test17' component={Test17} title='Test17'/>
                    <Scene key='Test18' component={Test18} title='Test18'/>
                    <Scene key='Test19' component={Test19} title='Test19'/>
                    <Scene key='Test20' component={Test20} title='Test20'/>
                    <Scene key='Test21' component={Test21} title='Test21'/>
                    <Scene key='TestResult' component={TestResult} title='Результаты теста'/>
                </Scene>
            </Router>
        )
    }

}