import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class Summary extends Component {
    render() {
        return (
            <Container fluid >
                <Row className="summary">
                    <Col className="pl-0 sumarry-left">
                        <h2 className="ml-5 title-text">MY PERSONAL
                            <br/>
                            <span className="title-text-bold">PROJECTS</span>
                        </h2>
                        <div className="square-bar"></div>
                    </Col>
                    <Col className ="pl-0 sumamry-right">
                    right
                    </Col>
                </Row>
            </Container>
        )
    }
}
