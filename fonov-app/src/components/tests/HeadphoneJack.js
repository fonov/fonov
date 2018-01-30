import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, TestStatus } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import {
    View, Navbar, Pages, Page,
    Views, NavCenter,Card, CardContent,
    CardHeader, NavLeft
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {PlayAudio} from '../../elements/index'


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
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>{_('headphone_jack')}</NavCenter>
                        <TestStatus test='HeadphoneJack' />
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    {_('insert_the_earphone.')}
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                            </Card>
                            <PlayAudio/>
                            <RatingCheck testN='HeadphoneJack'>
                                {_('the_headphone_jack_works?')}
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
        replace: path =>  dispatch(replace(path)),
        image_manager: number => dispatch(image_manager('HeadphoneJack', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadphoneJack);