import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class WiFi extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        /*
        TODO: UPDATE UI
        return (
            <BaseTest test='WiFi' title={_('wi-fi')}>
                <Card>
                    <CardHeader>
                        {_('open_settings_->_wi-fi._t...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(1)} />
                    </CardContent>
                </Card>

                <RatingCheck testN='WiFi'>
                    {_('wi-fi_works?')}
                </RatingCheck>
            </BaseTest>
        );
        */
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
        image_manager: number => dispatch(image_manager('WiFi', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WiFi);