import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../elements/index'


class Test10 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка динамиков на {currentModel}</Title>
                <Image src={require('../image/звуки/step.png')}/>
                <Text>
                    Для проверки звука необходимо открыть настройки. Звонки и проиграть пару стандартных звуков
                </Text>
                <TestNav testN={10}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test10);
