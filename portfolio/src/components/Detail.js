import React, {Component} from 'react'
import {Container,  Row, Col } from 'react-bootstrap'



export default class Detail extends Component {
    state ={
        details: [
            {
                description : "5 Developed an web application and a backend system that analyze the sentiments of tweets in real time utilizingReacton front end,Spring Bootonback end andSparkfor data streaming and NLP processing",

            },
            {
                description : "Front End:Created a dashboard usingReact, Ant Visualization and Ant Designbacked byTwitter APIto visualize the sentiment score of trendingkeywords, word frequency, and example tweets inreal time",

            },
            {
                description : "Service:Streamed data fromTwitter APIwithTweepyand analyzed the sentiments of tweets withNLPtoolVADERunderSpark",

            },
            {
                description : "Back End:UsedSpring Bootframework to handle GET requests from front end and PUT requests from Spark withSpring MVCframework",

            },
        ]
    }
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
                                <h2 className="pl-3 detail-title">TweetsTrend</h2><br/>
                                <ul className="detail-list">
                                    {this.makeList(this.state.details)}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
            </div>
        )
    }
}
