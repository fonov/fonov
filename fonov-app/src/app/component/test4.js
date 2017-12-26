import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test4 extends Component {

    currentWaterIndicatorImage() {
        const { currentModel } = this.props;

        switch (currentModel){
            case 'iPhone':
                return require('../image/water_damage/iphone_original.png');
            case 'iPhone 3G':
                return require('../image/water_damage/iphone3GS-water_damage.png');
            case 'iPhone 3GS':
                return require('../image/water_damage/iphone3GS-water_damage.png');
            case 'iPhone 4':
                return require('../image/water_damage/iphone_4_activated.png');
            case 'iPhone 4S':
                return require('../image/water_damage/iphone_4_activated.png');
            case 'iPhone 5':
                return require('../image/water_damage/iphone_5-water_damage.png');
            case 'iPhone 5c':
                return require('../image/water_damage/iphone_5-water_damage.png');
            case 'iPhone 5s':
                return require('../image/water_damage/iphone_5-water_damage.png');
            case 'iPhone 6':
                return require('../image/water_damage/iphone_6-water_damage.png');
            case 'iPhone 6 Plus':
                return require('../image/water_damage/iphone_6-water_damage.png');
            case 'iPhone 6s':
                return require('../image/water_damage/iphone_6-water_damage.png');
            case 'iPhone 6s Plus':
                return require('../image/water_damage/iphone_6-water_damage.png');
            case 'iPhone SE':
                return require('../image/water_damage/iphone_5-water_damage.png');
            case 'iPhone 7':
                return require('../image/water_damage/iphone7-liquid-contact-indicator.png');
            case 'iPhone 7 Plus':
                return require('../image/water_damage/iphone7-liquid-contact-indicator.png');
            case 'iPhone 8':
                return require('../image/water_damage/iphone8-liquid-contact-indicator.png');
            case 'iPhone 8 Plus':
                return require('../image/water_damage/iphone8-liquid-contact-indicator.png');
            case 'iPhone X':
                return require('../image/water_damage/iphone-x-liquid-contact-indicator.png');
            default:
                return require('../image/water_damage/iphone-x-liquid-contact-indicator.png')
        }

    }

    render() {

        return (
            <div>
                <h1>Попадание влаги</h1>
                <p>
                    Влага оказывает разрушительное влияние на компоненты iPhone. Чтобы определить было ли попадание влаги проверьте индикатор влаги согласно рисунку. Если индикатор красного цвета значит телефон был подвержен попаданию влаги
                </p>
                <img src={this.currentWaterIndicatorImage()} className="img-fluid"/>
                <TestNav testN={4}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test4);
