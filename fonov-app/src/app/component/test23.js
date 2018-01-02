import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../elements/index'
import {RatingCheck} from './rating/index'


class Test23 extends Component {

    secondImei() {

        const { currentModel } = this.props;

        switch(currentModel) {
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <div>
                        <Image src={require('../image/imei/iphone6s-SIM-card-illustration.png')} />
                        <Text>На слоте для сим карты</Text>
                    </div>
                );
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
                return (
                    <div>
                        <Image src={require('../image/imei/iphone6-imei-back-device.jpg')} />
                        <Text>На задней стороне iphone</Text>
                    </div>
                );
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <div>
                        <Image src={require('../image/imei/SIM-card-illustration.png')} />
                        <Text>На слоте для сим карты</Text>
                    </div>
                );
            default:
                return null
        }
    }

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка совподения IMEI {currentModel}</Title>
                <Image src={require('../image/imei/iphone7-ios11-settings-general-about-imei.jpg')} />
                <Text>Нстройки->Основные->О Устройстве.</Text>
                {this.secondImei()}
                <Image src={require('../image/imei/How-to-Find-IMEI-Number-Correctly-before-Unlock-11.jpg')} />
                <Text>На коробке.</Text>
                <RatingCheck
                    title={`IMEI совподают?`}
                    testN={23}
                />
                <TestNav testN={23}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test23);