import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../elements/index'
import {RatingCheck} from './rating/index'


class Test22 extends Component {

    render() {

        const {currentModel} = this.props;

        return (
            <div>
                <Title>Проверка гарантии</Title>
                <Image src={require('../image/waranty/Group 7.png')} />
                <Text>
                    Зайти в настройки -> основные -> об устройстве -> серийный номер. Нажмите на серийны номер и выбирете скопировать. Затем перейдите на официальный сайт Apple для проверки гарантии
                </Text>
                <Image src={require('../image/waranty/Group 8.png')} />
                <Text>
                    Затем перейдите на официальный сайт Apple для проверки гарантии
                </Text>
                <Button color="success" block target="_blank" href='https://checkcoverage.apple.com'>
                    Проверить гарантию
                </Button>
                <RatingCheck
                    title={`Данные о гарантии ${currentModel} совпадают с заявленной информацией?`}
                    testN={22}
                />
                <TestNav testN={22}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test22);