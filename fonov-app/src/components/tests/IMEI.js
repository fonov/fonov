import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, TestStatus } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import {
    View, Navbar, Pages,
    Page, Views, NavCenter,
    Card, CardContent,
    CardHeader, NavLeft, ContentBlockTitle
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class IMEI extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    secondImei() {

        const { currentModel, image_manager, imei_back_side_image_manager, _ } = this.props;

        switch(currentModel) {
            case 'iPhone 6s':
            case 'iPhone 6s Plus':
            case 'iPhone 7':
            case 'iPhone 7 Plus':
            case 'iPhone 8':
            case 'iPhone 8 Plus':
            case 'iPhone X':
                return (
                    <Card>
                        <CardHeader>
                            {_('the_slot_for_the_sim_card...')}
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(3)} />
                        </CardContent>
                    </Card>
                );
            case 'iPhone 5':
            case 'iPhone 5c':
            case 'iPhone 5s':
            case 'iPhone 6':
            case 'iPhone 6 Plus':
            case 'iPhone SE':
                return (
                    <Card>
                        <CardHeader>
                            {_('on_the_back_side_of_the_i...')}
                        </CardHeader>
                        <CardContent>
                            <Image src={imei_back_side_image_manager(1)} />
                        </CardContent>
                    </Card>
                );
            case 'iPhone':
            case 'iPhone 3G':
            case 'iPhone 3GS':
            case 'iPhone 4':
            case 'iPhone 4S':
                return (
                    <Card>
                        <CardHeader>
                            {_('the_slot_for_sim_card')}
                        </CardHeader>
                        <CardContent>
                            <Image src={image_manager(1)} />
                        </CardContent>
                    </Card>
                );
            default:
                return null
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        return (
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                        <NavCenter>{_('coincidence_imei')}</NavCenter>
                        <TestStatus test='IMEI' />
                    </Navbar>
                    <Pages>
                        <Page>
                            <ContentBlockTitle className='content_block_title'>
                                {_('check_whether_the_imei_of...')}
                            </ContentBlockTitle>

                            <Card>
                                <CardHeader>
                                    {_('settings_->_general_->_ab...')}
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(2)} />
                                </CardContent>
                            </Card>

                            {this.secondImei()}

                            <Card>
                                <CardHeader>
                                    {_('on_the_box.')}
                                </CardHeader>
                                <CardContent>
                                    <Image src={image_manager(5)} />
                                </CardContent>
                            </Card>

                            <RatingCheck testN='IMEI'>
                                {_('imei_the_same?')}
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
        image_manager: number => dispatch(image_manager('IMEI', number)),
        imei_back_side_image_manager: number => dispatch(image_manager('ImeiBackSide', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IMEI);