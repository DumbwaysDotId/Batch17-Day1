import React,{Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'


export default class ListProps extends Component{
    render(){
        return(
            <Container className="App-header">
                <Row>
                    <Col>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                        <Button variant="success">Success</Button>{' '}
                        <Button variant="warning">Warning</Button>{' '}
                        <Button variant="danger">Danger</Button>
                        <Button variant="info">Info</Button>{' '}
                        <Button variant="light">Light</Button>
                        <Button variant="dark">Dark</Button>{' '}
                        <Button variant="link">Link</Button>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        )
    }
}