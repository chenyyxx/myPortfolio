import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function Slide(props){
        return (
                <Card className="slide">
                    <Row>
                        <Col>
                            <Card.Img className="project-image" variant="top" src={props.slide.imgSrc} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{props.slide.title}</Card.Title>
                                <Card.Text>
                                {props.slide.subTitle}
                                </Card.Text>
                                <Card.Text>
                                {props.slide.description}
                                </Card.Text>
                                <Button variant="primary" href={props.slide.link}>View Detail</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                    

                    
                </Card>

        )
}
