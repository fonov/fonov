import React,{Component} from 'react'
import { Container, Row, Col } from 'reactstrap';


class Base extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {

        const { children, nav } = this.props;

        return (
            <div>
                <Container className="container-nav">
                    {nav}
                </Container>
                <Container>
                    <Row>
                        <Col xs="12" md={{ size: 8, offset: 2 }}>
                            {children}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Base