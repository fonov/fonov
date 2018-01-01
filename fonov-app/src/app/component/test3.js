import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Title, Text, Image } from '../elements'


class Test3 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>Внешний вид {currentModel}</Title>
                <Image src={require('../image2/внешний вид/removeCase.png')} />
                <Text>Извлеките iPhone из чехла</Text>
                <Image src={require('../image2/внешний вид/removeFilm.png')} />
                <Text>Удалите защитную пленку или стекло</Text>
                <Text>Осмотрите iPhone на наличие царапин, потертостей, трещин, сколов.</Text>
                <Image src={require('../image2/внешний вид/iPhone Front.png')}/>
                <Text>Передния часть телефона</Text>
                <Image src={require('../image2/внешний вид/iPhone Back.png')}/>
                <Text>Заднию часть телефона</Text>
                <Image src={require('../image2/внешний вид/sides.png')}/>
                <Text>Боковые грани телефона</Text>
                <TestNav testN={3}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test3);
