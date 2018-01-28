import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import URLS from '../constant/urls'
import {APP_NAME, LANGUAGES} from '../constant/config'
import { View, Navbar, Pages, Page,
    ContentBlock, ContentBlockTitle,
    List, ListItem, Views, NavCenter,
    AccordionContent, Button,
    NavLeft, NavRight
} from 'framework7-react';
import {version} from '../../package.json';
import {clean_test} from '../actions/test'
import { getTranslate, getActiveLanguage,  } from 'react-localize-redux';
import {ListItem as ListItem16} from '../elements/index'
import {set_active_language} from '../actions/localize'
import FontAwesome from 'react-fontawesome'


class Home extends Component {

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

    render() {

        const {push, initialTest, _, currentLanguage, set_active_language} = this.props;

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
                                <Button big color="red" fill onClick={() => push(URLS[initialTest])}>
                                    {_('start_test')}
                                </Button>
                            </ContentBlock>
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
                                            after={currentLanguage === lang ? <FontAwesome name="check" />  : null}
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
        initialTest: state.schemeOfTest[0],
        currentModel: state.current_iphone.model
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: path =>  dispatch(push(path)),
        clean_test: () => dispatch(clean_test()),
        set_active_language: code => dispatch(set_active_language(code))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
