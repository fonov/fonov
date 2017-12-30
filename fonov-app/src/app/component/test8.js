import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import TestNav from '../elements/testNav'


class Test8 extends Component {

    render() {

        return (
            <div>
                <h1>iCloid</h1>
                <p>
                    Телефон должен быть отвязан от аккатов iCloud и Apple id. В противном случае вы не сможете использовать телефон со своим аккаунтов и телефон может быть без возвратно заблокирован
                </p>
                <img src={require('../image/iCloud/IMG_0001.jpg')} className="img-fluid"/>
                <TestNav testN={8}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test8);
