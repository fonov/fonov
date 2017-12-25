import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test7 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>3D Touch</h1>
                <p>
                    Для проверка 3D Touch необходимо сильно понажать на иконки. После этого должен открыться меню
                </p>
                <img src={require('../image/screen/3D-Touch-iPhone-6s.jpg')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test8')}>Далле</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test7);
