import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TestNav, Image, Text, Title } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";


class iCloid extends Component {

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
                <Title>iCloid {currentModel}</Title>
                <Image src={require('../../assets/image/iCloud/IMG_0001.jpg')}/>
                <Text>
                    Телефон должен быть отвязан от аккатов iCloud и Apple ID.
                </Text>
                <RatingCheck testN='iCloid'>
                    {currentModel} отвязан от iCloud?
                </RatingCheck>
                <TestNav testN='iCloid'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(iCloid);
