import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { Image, Text, TestNav, Title } from '../elements/index'



class Test18 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка микрофона {currentModel}</Title>
                <Image src={require('../image/microphone/microphone.jpeg')} />
                <Text>
                    Откройти приложение микрофон. Сделайте тестувую запись.
                </Text>
                <Image src={require('../image/microphone/IMG_1361.PNG')} />
                <Text>
                    Прослушайте её. Запись не должна содержать постороних шумов и тресков. Голос должне быть чистым
                </Text>
                <TestNav testN={18}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test18);