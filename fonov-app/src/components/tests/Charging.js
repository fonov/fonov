import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, TestStatus } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import {
    View, Navbar, Pages,
    Page, Views, NavCenter,
    Card, CardContent, CardHeader, NavLeft
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class Charging extends Component {

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
                        <NavCenter>{_('charging_port')}</NavCenter>
                        <TestStatus test="Charging" />
                    </Navbar>
                    <Pages>
                        <Page>
                            <Card>
                                <CardHeader>
                                    {_('connect_your_phone_to_cha...')}
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)} />
                                </CardContent>
                            </Card>
                            <RatingCheck testN='Charging'>
                                {_('charging_port_works?')}
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
        image_manager: number => dispatch(image_manager('Charging', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Charging);