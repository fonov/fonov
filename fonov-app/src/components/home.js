import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import URLS from '../constant/urls'
import {APP_NAME} from '../constant/config'
import { View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
    List, ListItem, Views, NavCenter, AccordionContent, Button, NavLeft, NavRight
} from 'framework7-react';
import {version} from '../../package.json';
import {clean_test} from '../actions/test'
import { getTranslate, getActiveLanguage,  } from 'react-localize-redux';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            aboutTest: [
                {
                    title: props._('what_is_${app_name}?', {APP_NAME}),
                    desc: (
                        <p>{props._('test_for_iphone_before_bu...')}</p>
                    )
                },
                {
                    title: props._('why_is_it_necessary?'),
                    desc: (
                        <p>{props._('most_people_don\'t_know_ho...')}</p>
                    )
                },
                {
                    title: props._('why_${app_name}?', {APP_NAME}),
                    desc: (
                        <p>{props._('${app_name}_is_completely...', {APP_NAME})}</p>
                    )
                },
                {
                    title: props._('what_you_need_for_the_tes...'),
                    desc: (
                        <div style={{padding: 8}}>
                            <ul>
                                <li>{props._('clip')}</li>
                                <li>{props._('socket/powerbank')}</li>
                                <li>{props._('smartphone_with_the_funct...')}</li>
                            </ul>
                        </div>
                    )
                }
            ]
        };
    }

    componentWillMount() {
        const {clean_test, currentModel} = this.props;

        if (currentModel !== null) {
            clean_test()
        }
    }

    render() {

        const {push, initialTest, _} = this.props,
            {aboutTest} = this.state;

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

                            <List accordion inset>
                                {
                                    aboutTest.map((item, i) => (
                                        <ListItem accordionItem title={item.title}>
                                            <AccordionContent>
                                                <ContentBlock>{item.desc}</ContentBlock>
                                            </AccordionContent>
                                        </ListItem>
                                    ))
                                }
                            </List>
                            <ContentBlock inset>
                                Version: {version}
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
        clean_test: () => dispatch(clean_test())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
