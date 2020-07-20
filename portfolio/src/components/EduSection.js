import React, { Component } from 'react'
import { Container, Row, Card } from 'react-bootstrap';

export default class EduSection extends Component {
    makeEdus = (edus) => {
        return edus.map(edu => {
            return <Card style={{width: '60rem'}}>
                        <Card.Body>
                            <Card.Title>{edu.school}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                <span>{edu.degree}</span>
                                <span> : double majors of </span>
                                <span>{edu.majors[0]}</span>
                                <span> and </span>
                                <span>{edu.majors[1]}</span>
                            </Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>
                                        <span>GPA: {edu.GPA}</span>
                                    </li>
                                    <li>
                                        <span>Relevant Courses: </span>
                                        {edu.courses.map(course => {
                                            return <span>{course}, </span>
                                        })}
                                        <span>.</span>
                                    </li>
                                </ul>
                                
                            </Card.Text>
                        </Card.Body>
                
                    </Card>
        })
    }
    render(){
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeEdus(this.props.edus)}
                </Row>
            </Container>
        )
    }
}
