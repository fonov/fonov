import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import ChangeRoute from '../actions/route'


class Test8 extends Component {

    render() {

        const { changeRoute } = this.props;

        return (
            <div>
                <h1>iCloid</h1>
                <p>
                    Телефон должен быть отвязан от аккатов iCloud и Apple id. В противном случае вы не сможете использовать телефон со своим аккаунтов и телефон может быть без возвратно заблокирован
                </p>
                <img src={require('../image/iCloud/IMG_0001.jpg')} className="img-fluid"/>
                <Button color="primary" block onClick={() => changeRoute('Test9')}>Далле</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test8);
