import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test7 extends Component {

    render() {

        return (
            <div>
                <h1>3D Touch</h1>
                <p>
                    Для проверка 3D Touch необходимо сильно понажать на иконки. После этого должен открыться меню
                </p>
                <img src={require('../image/screen/3D-Touch-iPhone-6s.jpg')} className="img-fluid"/>
                <TestNav testN={7}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test7);
