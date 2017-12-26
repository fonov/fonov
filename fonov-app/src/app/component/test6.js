import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'

class Test6 extends Component {

    render() {

        return (
            <div>
                <h1>Сенсор</h1>
                <p>
                    Проводить польцем по всему экрану. Сенсор должен работать плавно и беззадержкой и на всей площади экрана
                </p>
                <img src={require('../image/screen/iPhone-screen-touch-600x402.png')} className="img-fluid"/>
                <TestNav testN={6}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Test6);
