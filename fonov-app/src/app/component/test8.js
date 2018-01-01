import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Image, Text, Title } from '../elements/index'


class Test8 extends Component {

    render() {

        const { currentModel } = this.props;

        return (
            <div>
                <Title>iCloid {currentModel}</Title>
                <Image src={require('../image/iCloud/IMG_0001.jpg')}/>
                <Text>
                    Телефон должен быть отвязан от аккатов iCloud и Apple ID.
                </Text>
                <TestNav testN={8}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test8);
