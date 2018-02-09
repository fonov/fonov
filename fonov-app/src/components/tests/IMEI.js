import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import URLS from "../../constant/urls";
import {replace} from "react-router-redux";
import image_manager from "../../actions/image-manager";
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {CardBody, CardHeader, Card} from 'reactstrap'


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
                        <CardBody>
                            <Image src={image_manager(3)} />
                        </CardBody>
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
                        <CardBody>
                            <Image src={imei_back_side_image_manager(1)} />
                        </CardBody>
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
                        <CardBody>
                            <Image src={image_manager(1)} />
                        </CardBody>
                    </Card>
                );
            default:
                return null
        }
    }

    render() {

        const { image_manager, _ } = this.props;

        return (
            <BaseTest
                test='IMEI'
                Title={_('coincidence_imei')}
                rating_check
                rating_question={_('imei_the_same?')}
            >
                <p className='mt-4'>
                    {_('check_whether_the_imei_of...')}
                </p>
                <Card className='mt-4'>
                    <CardHeader>
                        {_('settings_->_general_->_ab...')}
                    </CardHeader>
                    <CardBody>
                        <Image src={image_manager(2)} />
                    </CardBody>
                </Card>
                <div className='mt-4'>
                    {this.secondImei()}
                </div>
                <Card className='mt-4'>
                    <CardHeader>
                        {_('on_the_box.')}
                    </CardHeader>
                    <CardBody>
                        <Image src={image_manager(5)} />
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
        image_manager: number => dispatch(image_manager('IMEI', number)),
        imei_back_side_image_manager: number => dispatch(image_manager('ImeiBackSide', number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IMEI);