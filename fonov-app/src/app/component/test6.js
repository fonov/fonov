import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Text, Title, Image } from '../elements/index'


class Test6 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Сенсор в {currentModel}</Title>
                <Image src={require('../image2/screen/iPhone-screen-touch-600x402.png')}/>
                <Text>
                    Проводить польцем по всему экрану. Сенсор должен работать плавно и без задержок на всей площади экрана.
                </Text>
                <TestNav testN={6}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test6);
