import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {CardBody, CardHeader, Card} from 'reactstrap'


class Flash extends Component {

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
                test='Flash'
                Title={_('flash')}
                rating_check
                rating_question={_('the_flash_works?')}
            >
                <Card className='mt-4'>
                    <CardHeader>
                        {_('0_open_the_control_center_...')}
                    </CardHeader>
                    <CardBody>
                        <Image {...image_manager(1)} />
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
        image_manager: number => dispatch(image_manager('Flash', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
