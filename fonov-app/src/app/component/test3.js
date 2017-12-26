import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test3 extends Component {

    render() {


        return (
            <div>
                <h1>Определение ремонта</h1>
                <p>Ремонт бывает несколько типов. Профиссиональный ремонт в сервисном центре Apple или в авторизированных сервисных центров Но есть и другой тип ремонт, ремонт выполненный не профиссионалом и с использование не оригинальных запчастей. Если ремонт произведен профиссионаломи об этом очень сложно узнать но можно узнать был ли iPhone в не профиссионаьном ремонте. Неско признаков не качественного ремонта:</p>
                <img src={require('../image/repair/iPhone_-_Не_качественный_ремонт.png')} className="img-fluid"/>
                <h3>Смещение фронтальной камеры.</h3>
                <img src={require('../image/repair/iPhone_-_Не_качественный_ремонт_2.png')} className="img-fluid"/>
                <h3>Смещение передней камеры.</h3>
                <img src={require('../image/repair/Люфт_дитсплея.jpg')} className="img-fluid"/>
                <h3>Люфт экрана (равномерно понажимать по все кромки экрана)</h3>
                <TestNav testN={3}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Test3);
