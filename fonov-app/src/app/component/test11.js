import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Title, Image, TestNav } from '../elements/index'
import { RatingCheck } from './rating/index'


class Test11 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Компас и G-sensor {currentModel}</Title>
                <Image src={require('../image/compas/IMG_1352.PNG')} />
                <Text>
                    Открыть приложение компас и поврашать телефон. При вращение телефона компас доллжен менять свое положение
                </Text>
                <Image src={require('../image/compas/IMG_1353.PNG')} />
                <Text>
                    Взмахом влево открыть уровень. По переворачивайте телефон, сесор должен работать корректно и плавно.
                </Text>
                <RatingCheck
                    title={`Компас и G-sensor работают в ${currentModel}?`}
                    testN={11}
                />
                <TestNav testN={11}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test11);