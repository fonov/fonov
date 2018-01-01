import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../elements/index'
import { REPLACE_ROUTE } from "../actions/route";


class Test13 extends Component {

    componentWillMount() {

        const { currentModel, REPLACE_ROUTE } = this.props;

        switch (currentModel) {
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                REPLACE_ROUTE('Test14')
        }

    }

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка входа для наушников {currentModel}</Title>
                <Image src={require('../image/headpods/headpods.png')} />
                <Text>
                    Вставить наушники
                </Text>
                <Image src={require('../image/звуки/step.png')} />
                <Text>
                    Проиграть звук. Если звука нет, то попробуйте использоватеть заведомо рабочие наушники
                </Text>
                <TestNav testN={13}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test13);