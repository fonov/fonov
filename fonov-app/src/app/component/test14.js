import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { Image, Text, TestNav, Title } from '../elements/index'
import {REPLACE_ROUTE} from "../actions/route";


class Test14 extends Component {

    componentWillMount() {

        const { REPLACE_ROUTE } = this.props;

        REPLACE_ROUTE('Test15')
    }

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка датчика освешености {currentModel}</Title>
                <Image src={require('../image2/top_sensor/Group.png')} />
                <Text>
                    Увеличте яркость до максимума
                </Text>
                <Image src={require('../image2/top_sensor/Bitmap.png')} />
                <Text>
                    Заблокируйте телефон. Затем пальцем зайкройте датчик пальцем и включите iPhone. Шкала яркости должна уменьшиться
                </Text>
                <TestNav testN={14}/>
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
        REPLACE_ROUTE: route => dispatch(REPLACE_ROUTE(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test14);