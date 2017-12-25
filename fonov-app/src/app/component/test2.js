import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test2 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Внешний вид</h1>
                <p>
                    Извлечь телефон из чехла. Если iPhone имеет защитное стекло или пленку на задний или передней части телефона то ее необходимо удалить. Поднести телефон к источнику освящениею и внимательно осмотреть переднию, заднию и боковые грание на наличие царапин, потертостей, трещин, сколов.
                </p>
                <img src={require('../image/visual_appearance/front.png')} className="img-fluid"/>
                <img src={require('../image/visual_appearance/Боковая_грань.png')} className="img-fluid"/>
                <img src={require('../image/visual_appearance/front.png')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test3')}>Далее</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test2);
