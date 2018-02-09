import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {AudioTest} from '../../elements/index'
import {Card, CardBody, CardHeader} from 'reactstrap'


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
            <BaseTest
                test='HeadphoneJack'
                Title={_('headphone_jack')}
                rating_check
                rating_question={_('the_headphone_jack_works?')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {_('insert_the_earphone.')}
                    </CardHeader>
                    <CardBody>
                        <Image src={image_manager(1)} />
                    </CardBody>
                </Card>
                <AudioTest/>
            </BaseTest>
        )
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