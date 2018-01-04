import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { connect } from 'react-redux'
import {CycleButton} from '../elements/index'
import { push } from 'react-router-redux'
import URLS from '../constant/urls'
import {APP_NAME} from '../constant/config'


class Home extends Component {

    constructor(props) {
        super(props);

        this.aboutTest = [
            {
                title: 'Что это FonovTest?',
                desc: (
                    <p className='lead'>
                        Тест для проверки iPhone перед покупкой. Тест направлен на выявление различного рода неисправностей и недостатков. После прохождение теста программа даст Вам рекомендации относительно покупки iPhone.
                    </p>
                )
            },
            {
                title: 'Зачем это нужно?',
                desc: (
                    <p className='lead'>
                        Большинство людей не знают как провести полную диагностику iPhone перед покупкой, а это чревато потерей времени, денег и нервов. FonovTest направлен на то, чтобы каждый человек в независимости от его познаний в iPhone, мог провести его полную диагностику перед покупкой, аргументированно снизить цену из-за выявленных недостатков и купить исправный iPhone без скрытых дефектов.
                    </p>
                )
            },
            {
                title: 'Почему FonovTest?',
                desc: (
                    <p className='lead'>
                        FonovTest абсолютно бесплатный и не содержит рекламу. Мы проводим полное тестирование iPhone снаружи и внутри. Наш тест поддерживает все популярные языки. Наша миссия - помогать людям экономить время, деньги и нервы. Мы постоянно развиваем FonovTest и совершенствуем его каждый день.
                    </p>
                )
            },
            {
                title: 'Что нужно для теста?',
                desc: (
                    <ul className='lead'>
                        <li>Скрепка</li>
                        <li>Разетка/PowerBank/автозарядка</li>
                        <li>Сматфон с фонариком и возможность раздать Wi-Fi</li>
                    </ul>
                )
            }
        ];

        this.state = {};
    }

    componentWillMount() {

        let collapse_swith = {};

        for(let key in this.aboutTest) {
            collapse_swith[`collapse_${key}`] = false
        }

        this.setState(collapse_swith)
    }

    toggle(key) {
        this.setState({[`collapse_${key}`]: !this.state[`collapse_${key}`] });
    }

    render() {

        const {push} = this.props;

        return (
            <div>
                <h1 className="display-4">{APP_NAME}</h1>
                <h2>Тестирование iPhone перед покупкой</h2>
                <hr/>

                <CycleButton onClick={() => push(URLS.About)}>
                    Начать
                </CycleButton>

                {
                    this.aboutTest.map((item, i) => (
                        <Card key={i}>
                            <CardHeader onClick={() => this.toggle(i)}>
                                <h5 className='text-primary'>{item.title}</h5>
                            </CardHeader>
                            <Collapse isOpen={this.state[`collapse_${i}`]}>
                                <CardBody>{item.desc}</CardBody>
                            </Collapse>
                        </Card>
                    ))
                }

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        push: path =>  dispatch(push(path))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
