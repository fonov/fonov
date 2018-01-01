import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../elements/index'


class Test21 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Порт зарядки {currentModel}</Title>
                <Image src={require('../image2/charge/iphone_and_cable.png')} />
                <Text>
                    Подключите телефон к зарядки. Проверте плотно ли находиться разьм зарядки, отсутсвуют ли лифты. Телефон при подключние зарядки сразу же должен начать зарежаться
                </Text>
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