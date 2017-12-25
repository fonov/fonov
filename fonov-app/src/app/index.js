import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import ChangeRoute from "./actions/route";
// View
import Home from './component/home'
import Test1 from './component/test1'
import Test2 from './component/test2'
import Test3 from './component/test3'
import Test4 from './component/test4'
import Test5 from './component/test5'
import Test6 from './component/test6'
import Test7 from './component/test7'
import Test8 from './component/test8'
import Test9 from './component/test9'
import Test10 from './component/test10'


class App extends Component {

    componentWillMount() {
        const { changeRoute } = this.props;

        changeRoute('Test6')
    }

    currentScene() {

        const { route } = this.props;

        switch (route) {
            case 'Test1':
                return <Test1/>;
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
            default:
                return <Home/>
        }
    }

    render() {

        return (
            <div className="container">
                {this.currentScene()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        route: state.route
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeRoute: route => dispatch(ChangeRoute(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
