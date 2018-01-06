import React, { Component } from 'react';
import { ListGroupItem, Badge } from 'reactstrap';
import FontAwesome from 'react-fontawesome'


class ListStar extends Component {

    render() {

        const {ratingTest, testResult} = this.props;

        return(
            <ListGroupItem className='d-flex justify-content-between'>
                {ratingTest.title}
                <Badge pill style={{fontSize: '1em'}} color='primary'>
                    {testResult.firstStars}/{testResult.secondStars} <FontAwesome name='star-o' className='text-white'/>
                </Badge>
            </ListGroupItem>
        )
    }
}

export default ListStar