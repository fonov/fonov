import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, TestStatus } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {
    View, Navbar, Pages, Page,
    Views, NavCenter, Card,
    CardContent, CardHeader,
    NavLeft
} from 'framework7-react';
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
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>{_('microphone')}</NavCenter>
                        <TestStatus test='Microphone' />
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    {_('open_the_voice_recorder._...')}
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    {_('listen_to_it._the_entry_m...')}
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(2)} />
                                </CardContent>
                            </Card>

                            <RatingCheck testN='Microphone'>
                                {_('the_microphone_works?')}
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
        image_manager: number => dispatch(image_manager('Microphone', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Microphone);