import React, { Component } from 'react'
import { Row, Col} from 'antd';
import MyItem from './MyItem';

import tweetstrend from '../assets/images/tweetstrend.png';
import ways from '../assets/images/ways.jpg';
import events from '../assets/images/events.jpg';


export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Data Science',
                    imgSrc: tweetstrend,
                    link: 'https://github.com/chenyyxx/TweetsTrend',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Software Engineering',
                    imgSrc: events,
                    link: 'http://localhost:3000/software_engineer/about',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Other Experience',
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
            return (
                <Row justify="middle" align="center">
                    <MyItem
                        item={item} 
                        click={(e => this.handleCardClick(item.id, e))}
                        key={item.id}
                    />
                </Row>
            )
        })
    }

    render() {
        return (
            <div className="menu">
                <Row span={8}  justify="middle" align="center" className="item1">
                    <MyItem
                        item={this.state.items[0]} 
                        click={(e => this.handleCardClick(this.state.items[0].id, e))}
                        key={this.state.items[0].id}
                        style={{backgroundColor: "white"}}
                    />
                </Row>
                <Row  span={8} justify="middle" align="center" className="item2">
                    <MyItem className="myItem2"
                        item={this.state.items[1]} 
                        click={(e => this.handleCardClick(this.state.items[1].id, e))}
                        key={this.state.items[1].id}
                    />
                </Row>
                <Row  span={8} justify="middle" align="center" className="item3">
                    <MyItem className="myItem3"
                        item={this.state.items[2]} 
                        click={(e => this.handleCardClick(this.state.items[2].id, e))}
                        key={this.state.items[2].id}
                    />
                </Row>
            </div>
            
        )
    }
}
