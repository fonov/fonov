import React, { Component } from 'react';
import { connect } from 'react-redux'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {getTranslate} from "react-localize-redux/lib/index";
import {AudioTest, BaseTest} from '../../elements/index'


class Speaker extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const {_} = this.props;


        return (
            <BaseTest
                test='Speaker'
                Title={_('dynamics')}
                rating_check
                rating_question={_('the_speakers_are_working?')}
            >
                <AudioTest/>
            </BaseTest>
        )
    }

}

const mapStateToProps = state => {
    return {
        _: getTranslate(state.locale),
        currentModel: state.current_iphone.model,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Speaker);