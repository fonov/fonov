import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {CardBody, Card, CardHeader} from 'reactstrap'


class iCloud extends Component {

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
                test='iCloud'
                Title={_('icloud')}
                rating_check
                rating_question={_('iphone_untethered_jailbre...')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {_('the_phone_must_be_untethe...')}
                    </CardHeader>
                    <CardBody>
                        <Image src={image_manager(1)}/>
                    </CardBody>
                </Card>
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
        image_manager: number => dispatch(image_manager('iCloud', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(iCloud);
