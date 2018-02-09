import React,{Component} from 'react'
import { Container } from 'reactstrap';


class Base extends Component {

    render() {

        const { children, nav } = this.props;

        return (
            <div>
                <Container className="container-nav">
                    {nav}
                </Container>
                <Container>
                    {children}
                </Container>
            </div>
        )
    }
}

export default Base