import React, { Component } from 'react';
import { connect } from 'react-redux'
import {APP_NAME, LANGUAGES, TEST_TYPE_0, TEST_TYPE_1} from '../constant/config'
import { View, Navbar, Pages, Page,
    ContentBlock, ContentBlockTitle,
    List, ListItem, Views, NavCenter,
    AccordionContent, Button,
    NavLeft, NavRight, Actions,
    ActionsGroup, ActionsLabel, ActionsButton
} from 'framework7-react';
import {version} from '../../package.json';
import {clean_test} from '../actions/main'
import { getTranslate, getActiveLanguage,  } from 'react-localize-redux';
import {ListItem as ListItem16} from '../elements/index'
import {set_active_language} from '../actions/localize'
import FontAwesome from 'react-fontawesome'
import {start_test} from '../actions/main'


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
                title: _('{app_name}_-_what_is_it?', {APP_NAME}),
                desc: (
                    <p>{_('test_for_iphone_before_bu...')}</p>
                )
            },
            {
                title: _('why_is_it_necessary?'),
                desc: (
                    <p>{_('most_people_don\'t_know_ho...', {APP_NAME})}</p>
                )
            },
            {
                title: _('why_{app_name}?', {APP_NAME}),
                desc: (
                    <p>{_('{app_name}_is_completely...', {APP_NAME})}</p>
                )
            },
            {
                title: _('what_you_need_for_the_tes...'),
                desc: (
                    <div style={{padding: 8}}>
                        <ul>
                            <li>{_('clip')}</li>
                            <li>{_('socket/powerbank')}</li>
                            <li>{_('smartphone_with_the_funct...')}</li>
                        </ul>
                    </div>
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
            <Views>
                <View navbarThrough>
                    <Navbar>
                        <NavLeft/>
                            <NavCenter>{APP_NAME}</NavCenter>
                        <NavRight/>
                    </Navbar>
                    <Pages>
                        <Page>
                            <ContentBlockTitle className='content_block_title'>
                                {_('test_iphone')}
                            </ContentBlockTitle>

                            <ContentBlock>
                                <Button big color="red" fill onClick={() => this.action_select_type_test()}>
                                    {_('start_test')}
                                </Button>
                            </ContentBlock>

                            <Actions opened={select_type_test} onActionsClosed={() => this.action_select_type_test()}>
                                <ActionsGroup>
                                    <ActionsLabel>
                                        {_('0_select_which_iphone_you_w...')}
                                    </ActionsLabel>
                                    <ActionsButton
                                        onClick={() => start_test(TEST_TYPE_0)}
                                    >
                                        {_('to_test_this_iphone')}
                                    </ActionsButton>
                                    <ActionsButton
                                        onClick={() => start_test(TEST_TYPE_1)}
                                    >
                                        {_('another_test_iphone')}
                                    </ActionsButton>
                                </ActionsGroup>
                                <ActionsGroup>
                                    <ActionsButton color="red" bold>
                                        {_('cancel')}
                                    </ActionsButton>
                                </ActionsGroup>
                            </Actions>

                            <ContentBlockTitle className='content_block_title'>
                                <span role="img" aria-label="Globified">🌐</span> {_('language')}
                            </ContentBlockTitle>
                            <List inset>
                                {
                                    Object.keys(LANGUAGES).map((lang, i) => (
                                        <ListItem16
                                            onClick={() => set_active_language(lang)}
                                            key={i}
                                            title={(
                                                <span>
                                                    <span
                                                        role="img"
                                                        aria-label={LANGUAGES[lang].emoji_name}
                                                    >
                                                        {LANGUAGES[lang].emoji}
                                                    </span> {LANGUAGES[lang].name}
                                                </span>
                                            )}
                                            after={currentLanguage === lang ?
                                                <FontAwesome name="check" style={{color: '#c7c7cd'}} />  : null}
                                        />
                                    ))
                                }
                            </List>
                            <List accordion inset>
                                {
                                    this.aboutTest().map((item, i) => (
                                        <ListItem accordionItem title={item.title}>
                                            <AccordionContent>
                                                <ContentBlock>{item.desc}</ContentBlock>
                                            </AccordionContent>
                                        </ListItem>
                                    ))
                                }
                            </List>
                            <ContentBlock inset>
                                {`${_('version')}: ${version}`}
                            </ContentBlock>
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
        clean_test: () => dispatch(clean_test()),
        set_active_language: code => dispatch(set_active_language(code)),
        start_test: test_type => dispatch(start_test(test_type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
