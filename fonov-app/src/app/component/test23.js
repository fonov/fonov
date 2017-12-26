import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test23 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Проверка комплектующих</h1>
                <p>
                    Проверка совпадение серийного номера с коробкой с серийным номером iPhone. Откройти настройки -> Об этом устройстве -> Серийный номер. Затем сраните серийный номер телефона с сериныйм номером на каробке. Если iPhone ниже 5 то так же достаньте слот для сим карты перевните его и сраните серийный номер с с телофона, с слоита сим карты и коробки. Если на каробке нет наклейки или сериныйный номера не сопадвют значит это не оригинал ьная коробка от телефона
                </p>
                <img src={require('../image/components/box-sticker-iphone-serial-number.png')} className="img-fluid"/>
                <p>
                    Проверка наущников. Наушнки должны имееть эластичный кабель, приятный и не жесткий на ощупь. Соединительный стыки наушников должны быть идиально поддогнутые и гладкие. Ставьте наушнки и проиграйте песню. В наушниках должны отсутвовать постароние звуки. Сам звук должнем быть чистый без всяких премисей и шумов
                </p>
                <img src={require('../image/components/EarPods1.jpg')} className="img-fluid"/>
                <img src={require('../image/components/EarPods3.jpg')} className="img-fluid"/>
                <p>
                    Проверка кабеля зяриядки. Кабель должен быть шероховатый на ощупь и эластичный. Кабель должен иметь заводскую маркировку. Разьем Lightning  должен быть таким как на картинки
                </p>
                <img src={require('../image/components/lightning_serial-china.png')} className="img-fluid"/>
                <img src={require('../image/components/lightning_contacts.png')} className="img-fluid"/>
                <p>
                    Блок питания. Все стыки пластика должны быть идиальнро гладкими. Шрифт должен быть серого цвета и ровным.
                </p>
                <p>
                    Использование не оригинального кабеля питания или блока питания может сокранить срок службы вашего iPhone
                </p>
                <Button color="primary" block onClick={() => changeRoute('TestResult')}>Завершить тест</Button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        changeRoute: route => dispatch(ChangeRoute(route))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test23);