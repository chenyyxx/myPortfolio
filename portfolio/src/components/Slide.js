import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

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
                                <Button className="mr-3 mb-3" variant="primary" onClick={props.click}>View Detail</Button>
                                <Button className="mr-3 mb-3" variant="primary" href={props.slide.link}>
                                    <FontAwesomeIcon className="mr-2" icon={faGithub} size={props.size} />
                                    Go To Github
                                </Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

        )
}
