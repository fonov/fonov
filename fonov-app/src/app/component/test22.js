import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { Text, Title, TestNav, Image } from '../elements/index'


class Test22 extends Component {

    render() {

        return (
            <div>
                <Title>Проверка гарантии</Title>
                <Image src={require('../image2/waranty/Group 7.png')} />
                <Text>
                    Зайти в настройки -> основные -> об устройстве -> серийный номер. Нажмите на серийны номер и выбирете скопировать. Затем перейдите на официальный сайт Apple для проверки гарантии
                </Text>
                <Image src={require('../image2/waranty/Group 8.png')} />
                <Text>
                    Затем перейдите на официальный сайт Apple для проверки гарантии
                </Text>
                <Button color="success" block target="_blank" href='https://checkcoverage.apple.com'>
                    Проверить гарантию
                </Button>
                <TestNav testN={22}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Test22);