import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test6 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>Сенсор</h1>
                <p>
                    Проводить польцем по всему экрану. Сенсор должен работать плавно и беззадержкой и на всей площади экрана
                </p>
                <img src={require('../image/screen/iPhone-screen-touch-600x402.png')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test7')}>Далле</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test6);
