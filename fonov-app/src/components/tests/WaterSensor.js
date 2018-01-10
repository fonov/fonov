import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Image} from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import { View, Navbar, Pages, Page, Views, NavCenter,Card, CardFooter, CardContent, NavLeft, NavRight
} from 'framework7-react';


class WaterSensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    currentWaterIndicatorImage() {
        const { currentModel } = this.props;

        switch (currentModel){
            case 'iPhone':
                return require('../../assets/image/water_damage/iphone_original.png');
            case 'iPhone 3G':
                return require('../../assets/image/water_damage/iphone3GS-water_damage.png');
            case 'iPhone 3GS':
                return require('../../assets/image/water_damage/iphone3GS-water_damage.png');
            case 'iPhone 4':
                return require('../../assets/image/water_damage/iphone_4_activated.png');
            case 'iPhone 4S':
                return require('../../assets/image/water_damage/iphone_4_activated.png');
            case 'iPhone 5':
                return require('../../assets/image/water_damage/iphone_5-water_damage.png');
            case 'iPhone 5c':
                return require('../../assets/image/water_damage/iphone_5-water_damage.png');
            case 'iPhone 5s':
                return require('../../assets/image/water_damage/iphone_5-water_damage.png');
            case 'iPhone 6':
                return require('../../assets/image/water_damage/iphone_6-water_damage.png');
            case 'iPhone 6 Plus':
                return require('../../assets/image/water_damage/iphone_6-water_damage.png');
            case 'iPhone 6s':
                return require('../../assets/image/water_damage/iphone_6-water_damage.png');
            case 'iPhone 6s Plus':
                return require('../../assets/image/water_damage/iphone_6-water_damage.png');
            case 'iPhone SE':
                return require('../../assets/image/water_damage/iphone_5-water_damage.png');
            case 'iPhone 7':
                return require('../../assets/image/water_damage/iphone7-liquid-contact-indicator.png');
            case 'iPhone 7 Plus':
                return require('../../assets/image/water_damage/iphone7-liquid-contact-indicator.png');
            case 'iPhone 8':
                return require('../../assets/image/water_damage/iphone8-liquid-contact-indicator.png');
            case 'iPhone 8 Plus':
                return require('../../assets/image/water_damage/iphone8-liquid-contact-indicator.png');
            case 'iPhone X':
                return require('../../assets/image/water_damage/iphone-x-liquid-contact-indicator.png');
            default:
                return require('../../assets/image/water_damage/iphone-x-liquid-contact-indicator.png')
        }

    }

    render() {

        const { currentModel } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>Попадание влаги в {currentModel}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>

                            <Card>
                                <CardContent>
                                    <Image src={this.currentWaterIndicatorImage()} />
                                </CardContent>
                                <CardFooter>
                                    Влага оказывает разрушительное влияние на компоненты iPhone. Чтобы определить было ли попадание влаги проверьте индикатор влаги согласно рисунку. Если индикатор красного цвета значит телефон был подвергнут попаданию влаги.
                                </CardFooter>
                            </Card>

                            <RatingCheck testN='WaterSensor'>
                                {currentModel} был подвергнут попаданию влаги?
                            </RatingCheck>
                        </Page>
                    </Pages>
                </View>
            </Views>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentModel: state.currentModel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaterSensor);
