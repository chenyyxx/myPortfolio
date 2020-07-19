import React from 'react'
import {Container,  Row, Col } from 'react-bootstrap'

export default function Detail(props) {
    return (
        <div className="detail">
            <div className="detail_title">
                <h1 className="detail-title-text">PROJECT <span className="detail-title-text-bold">DETAIL</span></h1>
            </div>
            <Container className="detail-text">
                    <Row>
                        <Col>
                            <h2 className="pl-3 detail-title">TweetsTrend</h2>
                            <ul className="detail-list">
                                <li>
                                    {/* <div className="box"></div> */}
                                    <span>5 Developed an web application and a backend system that analyze the sentiments of tweets in real time utilizingReacton front end,Spring Bootonback end andSparkfor data streaming and NLP processing</span>
                                    {/* <p>{props.description[0]}</p> */}
                                </li>
                                <li>
                                    {/* <div className="box"></div> */}
                                    Front End:Created a dashboard usingReact, Ant Visualization and Ant Designbacked byTwitter APIto visualize the sentiment score of trendingkeywords, word frequency, and example tweets inreal time
                                    {/* <p>{props.description[1]}</p> */}
                                </li>
                                <li>
                                    {/* <div className="box"></div> */}
                                    Service:Streamed data fromTwitter APIwithTweepyand analyzed the sentiments of tweets withNLPtoolVADERunderSpark
                                    {/* <p>{props.description[2]}</p> */}
                                </li>
                                <li>
                                    {/* <div className="box"></div> */}
                                    Back End:UsedSpring Bootframework to handle GET requests from front end and PUT requests from Spark withSpring MVCframework
                                    {/* <p>{props.description[3]}</p> */}
                                </li>
                            </ul>
                            
                            
                            
                            
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
