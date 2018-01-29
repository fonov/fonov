import React, { Component } from 'react';
import { connect } from 'react-redux'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {
    View, Navbar, Pages, Page,
    Views, NavCenter,
    NavLeft, NavRight,
} from 'framework7-react';
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {PlayAudio, TestStatus} from '../../elements/index'


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
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>{_('dynamics')}</NavCenter>
                        <TestStatus test='Speaker'/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <PlayAudio />
                            <RatingCheck testN='Speaker'>
                                {_('the_speakers_are_working?')}
                            </RatingCheck>
                        </Page>
                    </Pages>
                </View>
            </Views>
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
        replace: path =>  dispatch(replace(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Speaker);
