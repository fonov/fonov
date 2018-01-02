import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../elements/index'
import { RatingCheck } from './rating/index'


class Test12 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка камеры {currentModel}</Title>
                <Image src={require('../image/controlPanel/camera.png')}/>
                <Text>
                    Откройте центр управления, нажмите на клавишу камеру. Проверьте изображение с фронтальной и передней камерой. Изображение должно быть чистое и без размытия
                </Text>
                <RatingCheck
                    title={`Камера работают в ${currentModel}?`}
                    testN={12}
                />
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