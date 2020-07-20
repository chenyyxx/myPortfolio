import React, { Component } from 'react'
import { Container, Row, Card ,Col} from 'react-bootstrap';

export default class SkillSection extends Component {
    makeSkills = (skills, title) => {
        return <Row>
                    <Col xs={3}>
                        <Card.Title className="pl-3">{title}</Card.Title>
                    </Col>
                    <Col>
                        <Card.Text>
                            <ul className="skill-box">
                                {skills.map(skill => {
                                    return <li className="skill-item">
                                            <span>{skill}</span>
                                        </li>
                                })}
                            </ul>
                        </Card.Text>
                    </Col>
                </Row>
    }
    render(){
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    <Card style={{ width: '60rem' }}>
                        <Card.Body>
                            {this.makeSkills(this.props.skills.languages, "Programming Languages")}
                            {this.makeSkills(this.props.skills.frameworks, "Frameworks")}
                            {this.makeSkills(this.props.skills.tools, "Tools")}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}
