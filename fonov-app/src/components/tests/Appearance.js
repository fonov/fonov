import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Image, BaseTest } from '../../elements/index'
import {replace} from "react-router-redux";
import URLS from '../../constant/urls'
import image_manager from '../../actions/image-manager'
import {getActiveLanguage, getTranslate} from "react-localize-redux/lib/index";
import {
    Card, ListGroup, ListGroupItem,
    CardHeader, CardBody, CardText
} from 'reactstrap'

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
            <BaseTest
                test='Appearance'
                Title={_('appearance')}
                rating_5_stars={{
                    firstTitle: _('claimed_as'),
                    lastTitle: _('real_state')
                }}
                rating_question={_('rating_of_appearance.')}
            >
                <p className="mt-4">
                    {_('inspect_the_iphone_for_sc...')}
                </p>
                <Card>
                    <ListGroup flush>
                        <ListGroupItem>
                            {_('remove_the_iphone_from_th...')}
                        </ListGroupItem>
                        <ListGroupItem>
                            {_('remove_the_protective_fil...')}
                        </ListGroupItem>
                    </ListGroup>
                </Card>
                {
                    [
                        [_('the_front_part_of_the_pho...'), image_manager(1)],
                        [_('the_back_of_the_phone.'), image_manager(2)],
                        [_('the_side_of_the_phone.'), image_manager(3)]
                    ].map((item, i) => (
                            <Card className="mt-4" key={i}>
                                <CardHeader>
                                    {item[0]}
                                </CardHeader>
                                <CardBody>
                                    <Image src={item[1]}/>
                                </CardBody>
                            </Card>
                        ))
                }
            </BaseTest>
        )
        /*
        TODO: UPDATE UI
        return (
            <BaseTest test='Appearance' title={_('appearance')}>
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
            </BaseTest>
        );
        */
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
