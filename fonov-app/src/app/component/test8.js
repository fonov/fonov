import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { TestNav, Image, Text, Title } from '../elements/index'


class Test8 extends Component {

    render() {

        return (
            <div>
                <Title>iCloid</Title>
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
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Test8);
