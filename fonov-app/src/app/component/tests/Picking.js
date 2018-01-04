import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";


class Picking extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    earpods() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <Image src={require('../../assets/image/accessories/aPPLEMB770_enl.jpg')} />
                );
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <Image src={require('../../assets/image/accessories/Apple-EarPods-with-Remote-and-Mic.png')} />
                );
            default:
                return null
        }
    }

    adapter() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <div>
                        <Image src={require('../../assets/image/accessories/4c2faf2c784a8663258f2fe9495542b0.jpg')} />
                        <Text>Адаптер Lightning/выход 3,5 мм для наушников</Text>
                    </div>
                );
            default:
                return null
        }
    }

    cable() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <div>
                        <Image src={require('../../assets/image/accessories/apple-30-pin-cable.jpg')} />
                        <Text>30 пиновый кабель</Text>
                    </div>
                );
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <div>
                        <Image src={require('../../assets/image/accessories/apple-lightning-cable-1_1024x1024.png')} />
                        <Text>Кабель Lightning/USB</Text>
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
                <Title>Проверка комплектации {currentModel}</Title>
                {this.earpods()}
                <Text>Наушники</Text>
                {this.adapter()}
                <Image src={require('../../assets/image/accessories/MD810.jpg')} />
                <Text>Зарядное устройстов</Text>
                {this.cable()}
                <RatingCheck testN='Picking'>
                    Комплектация {currentModel} совпадают с заявленной?
                </RatingCheck>
                <TestNav testN='Picking'/>
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
    return {
        replace: path =>  dispatch(replace(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Picking);