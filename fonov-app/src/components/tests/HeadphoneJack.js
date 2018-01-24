import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image } from '../../elements/index'
import { RatingCheck } from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import {
    View, Navbar, Pages, Page,
    Views, NavCenter,Card, CardContent,
    CardHeader, NavLeft, NavRight, CardFooter
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class HeadphoneJack extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, image_speaker, _ } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>{_('headphone_jack')}</NavCenter>
                        <NavRight/>
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
                            <Card>
                                <CardHeader>
                                    {_('play_any_sound_in_setting...')}
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_speaker()} />
                                </CardContent>
                                <CardFooter>
                                    {_('if_no_sound_try_using_ot...')}
                                </CardFooter>
                            </Card>
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
        image_manager: number => dispatch(image_manager('HeadphoneJack', number)),
        image_speaker: () => dispatch(image_manager('Speaker', 1))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadphoneJack);