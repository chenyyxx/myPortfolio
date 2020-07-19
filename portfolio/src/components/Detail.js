import React from 'react'
import {Container,  Row, Col } from 'react-bootstrap'

export default function Detail() {
    return (
        <div className="detail">
            <div className="detail_title">
                <h1 className="detail-title-text">PROJECT <span className="detail-title-text-bold">DETAIL</span></h1>
            </div>
            <Container className="detail-text">
                    <Row>
                        <Col>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </Col>
                        <Col>
                            right
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
