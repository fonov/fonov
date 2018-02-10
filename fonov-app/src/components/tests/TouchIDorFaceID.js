import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BaseTest, BaseCard } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class TouchIDorFaceID extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { currentModel, image_manager, _ } = this.props;

        switch (currentModel) {
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone SE':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
                return (
                    <BaseTest
                        test='TouchIDorFaceID'
                        Title={_('touch_id')}
                        rating_check
                        rating_question={_('touch_id_works?')}
                    >
                        <BaseCard
                            cards={[
                                [_('go_to_settings_->_touch_i...'), image_manager(1)]
                            ]}
                        />
                    </BaseTest>
                );
            case 'iPhone X':
                return (
                    <BaseTest
                        test='TouchIDorFaceID'
                        Title={_('face_id')}
                        rating_check
                        rating_question={_('face_id_works?')}
                    >
                        <BaseCard
                            cards={[
                                [_('to_check_face_id_go_to_se...'), image_manager(1)]
                            ]}
                        />
                    </BaseTest>
                );
            default:
                return null
        }
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
        image_manager: number => dispatch(image_manager('TouchIDorFaceID', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TouchIDorFaceID);