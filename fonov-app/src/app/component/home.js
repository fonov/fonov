import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { ADD_ROUTE } from '../actions/route'


class Home extends Component {

    render() {

        const { ADD_ROUTE } = this.props;

        return (
            <div>
                <h1>Тест Fonova</h1>
                <h3>Что это такое?</h3>
                <h5>Тест для проверки iPhone перед покупкой. Тест направлен на выявление различного рода неисправностей и недостатков. После прохождение теста программа даст Вам рекомендации относительно покупки iPhone.</h5>
                <h3>Зачем это нужно?</h3>
                <h5>Большинство людей не знают как провести полную диагностику iPhone перед покупкой, а это чревато потерей времени, денег и нервов. Проекта Fonov направлен на то чтобы каждый человек в независимости от его познаний в iPhone смог провести полную диагностику iPhone перед покупкой и купить исправный iPhone без скрытых дефектов. Вести аргументированный торг, снижать цену iPhone из-за выявленных недостатках и экономить деньги.</h5>
                <h3>Почему мы?</h3>
                <h5>Наш тест абсолютно бесплатный и не содержит рекламу. Мы проводим полное тестирование iPhone с наружи и внутри а также тестируем комплектующие. Наш тест поддерживает все популярные языки. Наша миссия помогать людям эноминить время, деньги и нервы. Мы развиваемся наш тест совершенствуется каждый день.</h5>
                <h3>Что нужно для теста?</h3>
                <h5>
                    <ul>
                        <li>Скрепка</li>
                        <li>Разетка/PowerBank/автозарядка</li>
                        <li>Сматфон с фонариком и возможность раздать Wi-Fi</li>
                    </ul>
                </h5>
                <Button color="primary" size="lg" block onClick={() => ADD_ROUTE('Test2')}>Начать тест</Button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        route: state.route
    }
};

const mapDispatchToProps = dispatch => {
    return {
        ADD_ROUTE: route => dispatch(ADD_ROUTE(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
