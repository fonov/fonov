import React, { Component } from 'react';
import {Image} from './index'
import {CardBody, Card, CardHeader} from 'reactstrap'


class BaseCard extends Component {

    render() {

        const {cards = []} = this.props;

        return cards.map((item, i) => (
            <Card className='mt-4' key={i}>
                <CardHeader>
                    {item[0]}
                </CardHeader>
                <CardBody>
                    <Image {...item[1]} />
                </CardBody>
            </Card>
        ))
    }
}

export default BaseCard