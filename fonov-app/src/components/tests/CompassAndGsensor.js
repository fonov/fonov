import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BaseTest, BaseCard } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class CompassAndGsensor extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        return (
            <BaseTest
                test='CompassAndGsensor'
                Title={_('compass_and_g-sensor')}
                rating_check
                rating_question= {_('compass_and_g-sensor_work...')}
            >
                <BaseCard
                    cards={[
                        [_('open_the_compass_app_and_...'), image_manager(1)],
                        [_('swipe_to_the_left_to_open...'), image_manager(2)]
                    ]}
                />
            </BaseTest>
        )
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
        image_manager: number => dispatch(image_manager('CompassAndGsensor', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompassAndGsensor);