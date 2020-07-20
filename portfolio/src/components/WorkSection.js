import React, { Component } from 'react'
import { Container, Row, Card } from 'react-bootstrap';

export default class WorkSection extends Component {
    makeWorks = (works) => {
        return works.map(work => {
            return <Card style={{ width: '60rem' }}>
                        <Card.Body>
                            <Card.Title>{work.company}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{work.position}</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    {this.makeDetails(work.details)}
                                </ul>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
        })
    }
    makeDetails = (details) => {
        return details.map(detail => {
            return  <li>
                        <span>{detail.detail}</span>
                    </li>
        })
    }

    render(){
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeWorks(this.props.works)}
                </Row>
            </Container>
        )
    }
}
