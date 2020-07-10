import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import Card from './Card';

import tweetstrend from '../assets/images/tweetstrend.png';
import ways from '../assets/images/ways.jpg';
import events from '../assets/images/events.jpg';


export default class Carousel extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'TweetsTrend',
                    subTitle: 'A Sentiment Analysis project for tweets using Spark, React, Spring Boot',
                    imgSrc: tweetstrend,
                    link: 'https://github.com/chenyyxx/TweetsTrend',
                    selected: false
                },
                {
                    id: 1,
                    title: 'EventS',
                    subTitle: 'Events Explore and Recommendation WebSite',
                    imgSrc: events,
                    link: 'https://github.com/chenyyxx/EventS',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Ways',
                    subTitle: 'LBS based Android App for Smart Driving',
                    imgSrc: ways,
                    link: 'https://github.com/chenyyxx/Ways',
                    selected: false
                },
            ]
        }
    }
    
    handleCardClick =(id, card) => {
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false: true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card 
                        item={item} 
                        click={(e => this.handleCardClick(item.id, e))}
                        key={item.id}
                    />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

