import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../elements/index'

class Test9 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка вспышки {currentModel}</Title>
                <Image src={require('../image/controlPanel/fl.png')} />
                <Text>
                    Откройти центр управления взмахом с низу в верх. Нажмите на клавишу фанарик и проверьте работу светадиода.
                </Text>
                <TestNav testN={9}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test9);
