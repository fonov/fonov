import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BaseTest, BaseCard } from '../../elements/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class Microphone extends Component {

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
                test='Microphone'
                Title={_('microphone')}
                rating_check
                rating_question={_('the_microphone_works?')}
            >
                <BaseCard
                    cards={[
                        [_('open_the_voice_recorder._...'), image_manager(1)],
                        [_('listen_to_it._the_entry_m...'), image_manager(2)]
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
        image_manager: number => dispatch(image_manager('Microphone', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Microphone);