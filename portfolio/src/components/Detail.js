import React, {Component} from 'react'
import {Container,  Row, Col } from 'react-bootstrap'



export default class Detail extends Component {

    makeList = (details) => {
        return details.map(detail => {
            return  <li>
                        <span>{detail.description}</span>
                    </li>
        })
    };
    render(){
        return (
            <div className="detail">
                <div className="detail_title">
                    <h1 className="detail-title-text">PROJECT <span className="detail-title-text-bold">DETAIL</span></h1>
                </div>
                <Container className="detail-text">
                        <Row>
                            <Col>
                                <h2 className="pl-3 detail-title">{this.props.slide.title}</h2><br/>
                                <ul className="detail-list">
                                    {this.makeList(this.props.slide.details)}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
            </div>
        )
    }
}
