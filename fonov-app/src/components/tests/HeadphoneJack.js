import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import {
    Card, CardContent, CardHeader
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {AudioTest} from '../../elements/index'


class HeadphoneJack extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        return (
            <BaseTest test='HeadphoneJack' title={_('headphone_jack')}>
                <Card>
                    <CardHeader>
                        {_('insert_the_earphone.')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(1)} />
                    </CardContent>
                </Card>
                <AudioTest/>
                <RatingCheck testN='HeadphoneJack'>
                    {_('the_headphone_jack_works?')}
                </RatingCheck>
            </BaseTest>
        );
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code,
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('HeadphoneJack', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadphoneJack);