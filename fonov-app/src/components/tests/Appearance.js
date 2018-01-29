import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, TestStatus } from '../../elements/index'
import { Rating5Stars } from '../rating/index'
import {replace} from "react-router-redux";
import URLS from '../../constant/urls'
import { View, Navbar, Pages, Page, Views, NavCenter,
    Card, CardHeader, CardContent, NavLeft, NavRight, ContentBlockTitle
} from 'framework7-react';
import image_manager from '../../actions/image-manager'
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class Appearance extends Component {

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
                        <NavCenter>{_('appearance')}</NavCenter>
                        <TestStatus test='Appearance' />
                    </Navbar>
                    <Pages>
                        <Page>
                            <ContentBlockTitle className='content_block_title'>
                                {_('inspect_the_iphone_for_sc...')}
                            </ContentBlockTitle>
                            <Card>
                                <CardContent>
                                    <p>{_('remove_the_iphone_from_th...')}</p>
                                    <p>{_('remove_the_protective_fil...')}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>{_('the_front_part_of_the_pho...')}</CardHeader>
                                <CardContent>
                                    <Image src={image_manager(1)}/>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>{_('the_back_of_the_phone.')}</CardHeader>
                                <CardContent>
                                    <Image src={image_manager(2)}/>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>{_('the_side_of_the_phone.')}</CardHeader>
                                <CardContent>
                                    <Image src={image_manager(3)}/>
                                </CardContent>
                            </Card>

                            <Rating5Stars
                                testN='Appearance'
                                firstTitle={_('claimed_as')}
                                lastTitle={_('real_state')}
                            >
                                {_('rating_of_appearance.')}
                            </Rating5Stars>
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
        image_manager: number => dispatch(image_manager('Appearance', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appearance);
