import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../elements/index'
import {RatingCheck} from './rating/index'


class Test21 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Зарядки в {currentModel}</Title>
                <Image src={require('../image/charge/iphone_and_cable.png')} />
                <Text>
                    Подключите телефон к зарядки. Проверте плотно ли находиться разьм зарядки, отсутсвуют ли лифты. Телефон при подключние зарядки сразу же должен начать зарежаться
                </Text>
                <RatingCheck
                    title={`Зарядка работают в ${currentModel}?`}
                    testN={21}
                />
                <TestNav testN={21}/>
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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Test21);