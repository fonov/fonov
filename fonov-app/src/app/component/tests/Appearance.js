import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Title, Text, Image } from '../../elements/index'
import { Rating5Stars } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from '../../constant/urls'


class Appearance extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Внешний вид {currentModel}</Title>
                <Image src={require('../../assets/image/внешний вид/removeCase.png')} />
                <Text>Извлеките iPhone из чехла</Text>
                <Image src={require('../../assets/image/внешний вид/removeFilm.png')} />
                <Text>Удалите защитную пленку или стекло</Text>
                <Text>Осмотрите iPhone на наличие царапин, потертостей, трещин, сколов.</Text>
                <Image src={require('../../assets/image/внешний вид/iPhone Front.png')}/>
                <Text>Передния часть телефона</Text>
                <Image src={require('../../assets/image/внешний вид/iPhone Back.png')}/>
                <Text>Заднию часть телефона</Text>
                <Image src={require('../../assets/image/внешний вид/sides.png')}/>
                <Text>Боковые грани телефона</Text>
                <Rating5Stars testN='Appearance'>
                    Оценка внешнего вида
                </Rating5Stars>
                <TestNav testN='Appearance'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Appearance);
