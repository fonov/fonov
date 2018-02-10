import React, { Component } from 'react';
import { connect } from 'react-redux'
import {APP_NAME, LANGUAGES, TEST_TYPE_0, TEST_TYPE_1} from '../constant/config'
import {version} from '../../package.json';
import {clean_test} from '../actions/main'
import { getTranslate, getActiveLanguage,  } from 'react-localize-redux';
import {BasePage} from '../elements/index'
import {set_active_language} from '../actions/localize'
import {start_test} from '../actions/main'
import {
    Button, ListGroup, ListGroupItem,
    Card, CardHeader, CardText, CardBody,
    Modal, ModalHeader, ModalBody
} from 'reactstrap'


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            select_type_test: false
        }
    }

    componentWillMount() {
        const {clean_test, currentModel} = this.props;

        if (currentModel !== null) {
            clean_test()
        }
    }

    aboutTest() {
        const {_} = this.props;

        return [
            {
                title: _('о_{app_name}', {APP_NAME}),
                desc: (
                    <CardBody>
                        <CardText>{_('1_test_for_iphone_before_bu...')}</CardText>
                    </CardBody>
                )
            },
            {
                title: _('0_what_you_need_for_the_tes...'),
                desc: (
                    <ListGroup flush>
                        <ListGroupItem>
                            {_('clip')}
                        </ListGroupItem>
                        <ListGroupItem>
                            {_('socket/powerbank')}
                        </ListGroupItem>
                        <ListGroupItem>
                            {_('4_wifi/smartphone_with_the_...')}
                        </ListGroupItem>
                        <ListGroupItem>
                            {_('bluetooth_device')}
                        </ListGroupItem>
                    </ListGroup>
                )
            }
        ]
    }

    action_select_type_test() {
        const {select_type_test} = this.state;

        this.setState({select_type_test: !select_type_test})
    }

    render() {

        const {_, currentLanguage, set_active_language, start_test} = this.props,
            {select_type_test} = this.state;

        return (
            <BasePage>
                <p className="mt-4">
                    {_('test_iphone')}
                </p>
                <Button color="danger" size="lg" block onClick={() => this.action_select_type_test()}>
                    {_('start_test')}
                </Button>
                <p className="mt-4">
                    <span role="img" aria-label="Globified">🌐</span> {_('language')}
                </p>
                <ListGroup>
                    {
                        Object.keys(LANGUAGES).map((lang, i) => (
                            <ListGroupItem
                                key={i}
                                onClick={() => set_active_language(lang)}
                                active={currentLanguage === lang}
                            >
                                <span
                                    role="img"
                                    aria-label={LANGUAGES[lang].emoji_name}
                                >
                                    {LANGUAGES[lang].emoji}
                                </span> {LANGUAGES[lang].name}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                {
                    this.aboutTest().map((item, i) => (
                        <Card className="mt-4" key={i}>
                            <CardHeader>
                                {item.title}
                            </CardHeader>
                            {item.desc}
                        </Card>
                    ))
                }
                <p className="my-4">
                    <strong>
                        {`${_('version')}: ${version}`}
                    </strong>
                </p>
                <Modal isOpen={select_type_test} toggle={() => this.action_select_type_test()}>
                    <ModalHeader>
                        {_('0_select_which_iphone_you_w...')}
                    </ModalHeader>
                    <ModalBody>
                        <Button outline color="primary" size="lg" block onClick={() => start_test(TEST_TYPE_0)}>
                            {_('to_test_this_iphone')}
                        </Button>
                        <Button outline color="primary" size="lg" block onClick={() => start_test(TEST_TYPE_1)}>
                            {_('another_test_iphone')}
                        </Button>
                    </ModalBody>
                </Modal>
            </BasePage>
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
        clean_test: () => dispatch(clean_test()),
        set_active_language: code => dispatch(set_active_language(code)),
        start_test: test_type => dispatch(start_test(test_type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
