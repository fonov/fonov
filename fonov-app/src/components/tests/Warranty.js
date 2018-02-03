import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import {RatingCheck} from '../rating/index'
import {replace} from "react-router-redux";
import URLS from "../../constant/urls";
import {
    Card, CardContent, CardHeader,
    Button, ContentBlock, CardFooter
} from 'framework7-react';
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";


class Warranty extends Component {

    componentWillMount() {
        const {replace, currentModel} = this.props;

        if (currentModel === null) {
            replace(URLS.Home)
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        return (
            <BaseTest test='Warranty' title={_('warranty')}>
                <Card>
                    <CardHeader>
                        {_('go_to_settings_->_general...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(1)} />
                    </CardContent>
                    <CardFooter>
                        {_('then_go_to_the_official_...')}
                    </CardFooter>
                </Card>

                <ContentBlock>
                    <Button
                        fill
                        big
                        color='green'
                        onClick={() => window.open(_("Apple_Warranty_URI"))}
                    >
                        {_('check_guarantee')}
                    </Button>
                </ContentBlock>

                <Card>
                    <CardHeader>
                        {_('insert_the_serial_number...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(2)} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        {_('scroll_down_to_warranty_s...')}
                    </CardHeader>
                    <CardContent>
                        <Image src={image_manager(3)} />
                    </CardContent>
                </Card>

                <RatingCheck testN='Warranty'>
                    {_('information_about_warrant...')}
                </RatingCheck>
            </BaseTest>
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
        image_manager: number => dispatch(image_manager('Warranty', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Warranty);