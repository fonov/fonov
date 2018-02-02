import React, { Component } from 'react';
import { connect } from 'react-redux'
import { RatingCheck } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {
    View, Navbar, Pages, Page,
    Views, NavCenter,
    NavLeft, Card, CardHeader,
    CardContent
} from 'framework7-react';
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {AudioTest, TestStatus, Image} from '../../elements/index'
import image_manager from '../../actions/image-manager'
import {TEST_TYPE_0} from '../../constant/config'


class Speaker extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const {image_manager, _, test_type} = this.props;

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
                            <AudioTest/>
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
        currentModel: state.current_iphone.model,
        test_type: state.test.type
    }
};

const mapDispatchToProps = dispatch => {
    return {
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('Speaker', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Speaker);
