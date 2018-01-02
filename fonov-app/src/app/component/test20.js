import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../elements/index'
import {RatingCheck} from './rating/index'


class Test20 extends Component {

    callWithHeadpods() {

        const { currentModel } = this.props;

        switch (currentModel) {
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone SE':
                return (
                    <div>
                        <Image src={require('../image/call/call_headpods.png')} />
                        <Text>
                            Вставьте наушники и попробуйте разговарить через них
                        </Text>
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
                <Title>Вызов и Датчик приближения {currentModel}</Title>
                <Image src={require('../image/call/cell.png')} />
                <Text>
                    Вставьте сим карту. Телефон должнен сразу же найти сеть.
                </Text>
                <Image src={require('../image/call/call.png')} />
                <Text>
                    Попробуйте соверщить вызов.
                </Text>
                <Image src={require('../image/call/spiker_call.png')} />
                <Text>
                    Включите громкую связь
                </Text>
                {this.callWithHeadpods()}
                <Image src={require('../image/call/call_sensor.png')} />
                <Text>
                    Выключите громкую связь и зайкройте пальцем сенсор приближения. Экран должен потухнуть
                </Text>
                <RatingCheck
                    title={`Вызов и Датчик приближения работают в ${currentModel}?`}
                    testN={20}
                />
                <TestNav testN={20}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test20);