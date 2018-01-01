import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../elements/index'


class Test12 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка камеры {currentModel}</Title>
                <Image src={require('../image2/controlPanel/camera.png')}/>
                <Text>
                    Откройте центр управления, нажмите на клавишу камеру. Проверьте изображение с фронтальной и передней камерой. Изображение должно быть чистое и без размытия
                </Text>
                <TestNav testN={12}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test12);