import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import URLS from '../constant/urls'
import {APP_NAME} from '../constant/config'
import { View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
    List, ListItem, Views, NavCenter, AccordionContent, Button, NavLeft, NavRight
} from 'framework7-react';
import {version} from '../../package.json';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            aboutTest: [
                {
                    title: 'Что это FonovTest?',
                    desc: (
                        <p>
                            Тест для проверки iPhone перед покупкой. Тест направлен на выявление различного рода неисправностей и недостатков. После прохождение теста программа даст Вам рекомендации относительно покупки iPhone.
                        </p>
                    )
                },
                {
                    title: 'Зачем это нужно?',
                    desc: (
                        <p>
                            Большинство людей не знают как провести полную диагностику iPhone перед покупкой, а это чревато потерей времени, денег и нервов. FonovTest направлен на то, чтобы каждый человек в независимости от его познаний в iPhone, мог провести его полную диагностику перед покупкой, аргументированно снизить цену из-за выявленных недостатков и купить исправный iPhone без скрытых дефектов.
                        </p>
                    )
                },
                {
                    title: 'Почему FonovTest?',
                    desc: (
                        <p>
                            FonovTest абсолютно бесплатный и не содержит рекламу. Мы проводим полное тестирование iPhone снаружи и внутри. Наш тест поддерживает все популярные языки. Наша миссия - помогать людям экономить время, деньги и нервы. Мы постоянно развиваем FonovTest и совершенствуем его каждый день.
                        </p>
                    )
                },
                {
                    title: 'Что нужно для теста?',
                    desc: (
                        <List>
                            <ListItem title="Скрепка"/>
                            <ListItem title="Розетка/PowerBank"/>
                            <ListItem title="Смартфон с функцией раздачи Wi-Fi"/>
                        </List>
                    )
                }
            ]
        };
    }

    render() {

        const {push, initialTest} = this.props,
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
                                Тестирование iPhone перед покупкой.
                            </ContentBlockTitle>

                            <ContentBlock>
                                <Button big color="red" fill onClick={() => push(URLS[initialTest])}>
                                    Начать
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
        initialTest: state.schemeOfTest[0]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        push: path =>  dispatch(push(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
