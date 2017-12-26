import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test2 extends Component {

    render() {

        return (
            <div>
                <h1>Внешний вид</h1>
                <p>
                    Извлечь телефон из чехла. Если iPhone имеет защитное стекло или пленку на задний или передней части телефона то ее необходимо удалить. Поднести телефон к источнику освящениею и внимательно осмотреть переднию, заднию и боковые грание на наличие царапин, потертостей, трещин, сколов.
                </p>
                <img src={require('../image/visual_appearance/front.png')} className="img-fluid"/>
                <img src={require('../image/visual_appearance/Боковая_грань.png')} className="img-fluid"/>
                <img src={require('../image/visual_appearance/front.png')} className="img-fluid"/>
                <TestNav testN={2}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test2);
