import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { ADD_ROUTE } from "./actions/route";
// View
import Home from './component/home'
import Test2 from './component/test2'
import Test3 from './component/test3'
import Test4 from './component/test4'
import Test5 from './component/test5'
import Test6 from './component/test6'
import Test7 from './component/test7'
import Test8 from './component/test8'
import Test9 from './component/test9'
import Test10 from './component/test10'
import Test11 from './component/test11'
import Test12 from './component/test12'
import Test13 from './component/test13'
import Test14 from './component/test14'
import Test15 from './component/test15'
import Test16 from './component/test16'
import Test17 from './component/test17'
import Test18 from './component/test18'
import Test19 from './component/test19'
import Test20 from './component/test20'
import Test21 from './component/test21'
import Test22 from './component/test22'
import Test23 from './component/test23'
import Test24 from './component/test24'
import TestResult from './component/testResult'


class App extends Component {

    componentWillMount() {
        const { ADD_ROUTE } = this.props;

        if (process.env.NODE_ENV === 'development') {
            ADD_ROUTE('Test24')
        }
    }

    currentScene() {

        const { currentRoute } = this.props;

        switch (currentRoute) {
            case 'Test2':
                return <Test2/>;
            case 'Test3':
                return <Test3/>;
            case 'Test4':
                return <Test4/>;
            case 'Test5':
                return <Test5/>;
            case 'Test6':
                return <Test6/>;
            case 'Test7':
                return <Test7/>;
            case 'Test8':
                return <Test8/>;
            case 'Test9':
                return <Test9/>;
            case 'Test10':
                return <Test10/>;
            case 'Test11':
                return <Test11/>;
            case 'Test12':
                return <Test12/>;
            case 'Test13':
                return <Test13/>;
            case 'Test14':
                return <Test14/>;
            case 'Test15':
                return <Test15/>;
            case 'Test16':
                return <Test16/>;
            case 'Test17':
                return <Test17/>;
            case 'Test18':
                return <Test18/>;
            case 'Test19':
                return <Test19/>;
            case 'Test20':
                return <Test20/>;
            case 'Test21':
                return <Test21/>;
            case 'Test22':
                return <Test22/>;
            case 'Test23':
                return <Test23/>;
            case 'Test24':
                return <Test24/>;
            case 'TestResult':
                return <TestResult/>;
            default:
                return <Home/>
        }
    }

    render() {

        return (
            <div
                className="container"
                style={{padding: 25}}
            >
                {this.currentScene()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentRoute: state.route.currentRoute
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ADD_ROUTE: route => dispatch(ADD_ROUTE(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
