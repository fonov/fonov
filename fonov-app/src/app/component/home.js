import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { ADD_ROUTE } from '../actions/route'


class Home extends Component {

    render() {

        const { ADD_ROUTE } = this.props;

        return (
            <div>
                <h1 className="display-1">Тест Fonov</h1>
                <h3>Что это такое?</h3>
                <p className='lead'>
                    Тест для проверки iPhone перед покупкой. Тест направлен на выявление различного рода неисправностей и недостатков. После прохождение теста программа даст Вам рекомендации относительно покупки iPhone.
                </p>
                <h3>Зачем это нужно?</h3>
                <p className='lead'>
                    Большинство людей не знают как провести полную диагностику iPhone перед покупкой, а это чревато потерей времени, денег и нервов. Тест Fonov направлен на то чтобы каждый человек в независимости от его познаний в iPhone смог провести полную диагностику iPhone перед покупкой и купить исправный iPhone без скрытых дефектов. Вести аргументированный торг, снижать цену iPhone из-за выявленных недостатках и экономить деньги.
                </p>
                <h3>Почему мы?</h3>
                <p className='lead'>
                    Наш тест абсолютно бесплатный и не содержит рекламу. Мы проводим полное тестирование iPhone снаружи и внутри. Наш тест поддерживает все популярные языки. Наша миссия помогать людям экономить время, деньги и нервы. Мы развиваемся наш тест совершенствуется каждый день.
                </p>
                <h3>Что нужно для теста?</h3>
                <ul className='lead'>
                    <li>Скрепка</li>
                    <li>Разетка/PowerBank/автозарядка</li>
                    <li>Сматфон с фонариком и возможность раздать Wi-Fi</li>
                </ul>
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
