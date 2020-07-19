import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function Slide(props){
        return (
            <div>
                <Card border="light" style={{ width: '100%' }}>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={props.link} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
}
