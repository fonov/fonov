import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Text, Image, Title } from '../elements/index'


class Test5 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Проверка кнопок и вибрации {currentModel}</Title>
                <Image src={require('../image2/кнопки/Кпокпи 2.png')}/>
                <Text>
                    Проверьте клавиши громкости и кнопку бесшумного режима. При переводе iPhone в бесшумных телефон должен завибрировать
                </Text>
                <Image src={require('../image2/кнопки/Кпокпи.png')}/>
                <Text>Клавиша Домой</Text>
                <Image src={require('../image2/кнопки/Кпокпи 3.png')}/>
                <Text>Клавиша блокировки</Text>
                <TestNav testN={5}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test5);
