import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Text, Image, Title } from '../elements/index'
import { REPLACE_ROUTE } from "../actions/route";


class Test7 extends Component {

    componentWillMount() {

        const { currentModel, REPLACE_ROUTE } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
                REPLACE_ROUTE('Test8')
        }

    }

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>3D Touch в {currentModel}</Title>
                <Image src={require('../image/screen/3D-Touch-iPhone-6s.jpg')}/>
                <Text>
                    Для проверка 3D Touch необходимо сильно понажать на иконки. После этого должен открыться меню
                </Text>
                <TestNav testN={7}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentModel: state.currentModel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        REPLACE_ROUTE: route => dispatch(REPLACE_ROUTE(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test7);
