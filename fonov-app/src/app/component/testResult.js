import React, { Component } from 'react';
import { ListGroup, Alert, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { ADD_ROUTE, POP_ROUTE } from '../actions/route'
import { Title, ListCheck, ListStar } from '../elements/index'


class TestResult extends Component {

    constructor(props) {
        super(props);

        this.ratingTest = {
            2: {
                title: 'Информация о iPhone',
                pass: true,
                warning: 'Информация о телефоне не совпадает с заявленной информацией. Мы не рекомендуем Вам покупать данный телефон.',
                weight:-100
            },
            3: {
                title: 'Внешний вид iPhone',
                weight:7.5
            },
            4: {
                title: 'Датчик влаги',
                pass: false,
                warning: 'Мы не рекамендуем к покупки iPhone после попадания воды. Вода оказывет негативное влияние на внутренные микросхемы iPhone и разрушают его',
                weight:-100
            },
            5: {
                title: 'Кнопки и вибрация',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с нерабочими кнопками или вибрацией.',
                weight:-100
            },
            6: {
                title: 'Сенсор',
                pass: true,
                warning: 'Мы не рекамендуем к покупки с не корректно работающим сенсором',
                weight:-100
            },
            7: {
                title: '3D Touch',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с не работающим 3D Touch, скорей всего экран был поврежден и был замен на более дешевыф аналог без поддержки 3D Touch',
                weight:-100
            },
            8: {
                title: 'iCloud',
                pass: true,
                warning: 'Мы категорически не рекамендуем к покупки iPhone с приявязкой к iCloid. Вы не сможете ввести свой iCloud а так же iPhone можеи быть заблокирован.',
                weight:-100
            },
            9: {
                title: 'Вспышка',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с нерабочий вспышкой.',
                weight:-100
            },
            10: {
                title: 'Динамики',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с не рабочим динамиком',
                weight:-100
            },
            11: {
                title: 'Компас и G-sensor',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с не рабочим компасом или g-sensor',
                weight:-100
            },
            12: {
                title: 'Камера',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с не рабочей камерой',
                weight:-100
            },
            13: {
                title: 'Входа для наушников',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с не рабочим входом для наушников',
                weight:-100
            },
            15: {
                title: props.currentModel === 'iPhone X' ? 'Face ID' : 'Touch ID',
                pass: true,
                warning: `Мы не рекамендуем к покупки телефон с не рабочим ${props.currentModel === 'iPhone X' ? 'Face ID' : 'Touch ID'}`,
                weight:-100
            },
            16: {
                title: 'WiFi',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с нерабочим wifi.',
                weight:-100
            },
            17: {
                title: 'Bluetooth',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с нерабочим Bluetooth.',
                weight:-100
            },
            18: {
                title: 'Микрофон',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с нерабочим микрофоном.',
                weight:-100
            },
            20: {
                title: 'Вызов и Датчик приближения',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон без возможности вызова или датчика приближения.',
                weight:-100
            },
            21: {
                title: 'Зарядка',
                pass: true,
                warning: 'Мы не рекамендуем к покупки телефон с нерабочим зарядкой.',
                weight:-100
            },
            22: {
                title: 'Гарантия',
                pass: true,
                weight:5
            },
            23: {
                title: 'Совпадение IMEI',
                pass: true,
                weight:5
            },
            24: {
                title: 'Комплектация',
                pass: true,
                weight:5
            }
        };

        this.state = {rank: null, testList: null}
    }

    componentWillMount() {

        const {rating} = this.props;

        let testList = [], rank = 0;

        for (let key of Object.keys(rating)) {
            let rTest = this.ratingTest[key], tResult = rating[key];
            if (typeof tResult.check !== 'undefined') {
                if (tResult.check !== rTest.pass) {
                    rank = rank+rTest.weight
                }
                testList.push(<ListCheck testResult={tResult} ratingTest={rTest} key={key}/>)
            }
            if (typeof tResult.firstStars !== 'undefined' && typeof tResult.secondStars !== 'undefined') {
                if (tResult.firstStars > tResult.secondStars) {
                    rank = rank+(tResult.firstStars-tResult.secondStars)*rTest.weight
                }
                testList.push(<ListStar testResult={tResult} ratingTest={rTest} key={key}/>)
            }
        }

        this.setState({rank, testList});
    }

    conclusion() {

        const { rank } = this.state,
            { currentModel } = this.props;

        if (rank < 0) {
            // Не рекомендован
           return (
               <Alert color="danger">
                   <h4 className="alert-heading">{currentModel} не рекомендован к покупке!</h4>
                   <p>
                       {currentModel} содержит критические недостатки.
                   </p>
               </Alert>
           )
        } else if (rank === 0) {
            // Идиально
            return (
                <Alert color="success">
                    <h4 className="alert-heading">{currentModel} рекомендован к покупке!</h4>
                    <p>
                        {currentModel} полностью соответствует заявленной информацией и абсолютно рабочий.
                    </p>
                </Alert>
            )

        } else if (rank > 0 && rank <= 10) {
            // Маленькая скидка
            return (
                <Alert color="success">
                    <h4 className="alert-heading">{currentModel} рекомендован к покупке!</h4>
                    <p>
                        {currentModel} имеет маленькие не достатки. Вы можете расчитывать на не большую скидку от продовца.
                    </p>
                </Alert>
            )

        } else if (rank > 10 && rank <= 20) {
            // Среднея скидка
            return (
                <Alert color="warning">
                    <h4 className="alert-heading">{currentModel} рекомендован к покупке!</h4>
                    <p>
                        {currentModel} имеет не достатки, но не критические. Вы можете расчитывать на среднию скидку от продовца.
                    </p>
                </Alert>
            )

        } else if (rank > 20 && rank <= 25) {
            // чуть выше среднего
            return (
                <Alert color="warning">
                    <h4 className="alert-heading">{currentModel} рекомендован к покупке!</h4>
                    <p>
                        {currentModel} имеет не достатки, но не критические. Вы можете расчитывать на скидку выше среднего от продовца.
                    </p>
                </Alert>
            )
        } else {
            // Высокая скидка
            return (
                <Alert color="warning">
                    <h4 className="alert-heading">{currentModel} рекомендован к покупке!</h4>
                    <p>
                        {currentModel} имеет не достатки, но не критические. Вы можете расчитывать на высокую скидку от продовца.
                    </p>
                </Alert>
            )
        }
    }

    render() {

        const { ADD_ROUTE, currentModel, POP_ROUTE } = this.props,
            { testList } = this.state;

        return (
            <div>
                <Title>Результаты теста {currentModel}</Title>
                <ListGroup>{testList !== null && testList}</ListGroup>
                <div style={{marginTop: 20, marginBottom: 10}}>{this.conclusion()}</div>
                <Row>
                    <Col>
                        <Button size="lg" color="primary" block onClick={() => POP_ROUTE()}>Назад</Button>
                    </Col>
                    <Col>
                        <Button size="lg" color="primary" block onClick={() => ADD_ROUTE('Home')}>Домой</Button>
                    </Col>
                </Row>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        currentModel: state.currentModel,
        rating: state.rating
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ADD_ROUTE: (route, props = null) => dispatch(ADD_ROUTE(route, props)),
        POP_ROUTE: (props = null) => dispatch(POP_ROUTE(props))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
