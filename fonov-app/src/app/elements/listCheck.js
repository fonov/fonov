import React, { Component } from 'react';
import { ListGroupItem, ListGroupItemText } from 'reactstrap';
import FontAwesome from 'react-fontawesome'


class ListCheck extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleIcon: {fontSize: '1.5em'}
        }
    }

    render() {

        const {testResult, ratingTest} = this.props,
            {styleIcon} = this.state;

        switch(ratingTest.pass) {
            case testResult.check:
                return (
                    <ListGroupItem className='d-flex justify-content-between'>
                        {ratingTest.title}
                        <FontAwesome
                            name='check-circle-o'
                            className='text-success'
                            style={styleIcon}
                        />
                    </ListGroupItem>
                );
            default:
                return (
                    <ListGroupItem color={ratingTest.warning ? "danger" : null}>
                        <ListGroupItemText className='d-flex justify-content-between'>
                            {ratingTest.title}
                            <FontAwesome
                                name='times-circle-o'
                                className='text-danger'
                                style={styleIcon}
                            />
                        </ListGroupItemText>
                        {ratingTest.warning && <ListGroupItemText>{ratingTest.warning}</ListGroupItemText>}
                    </ListGroupItem>
                )
        }
    }
}

export default ListCheck