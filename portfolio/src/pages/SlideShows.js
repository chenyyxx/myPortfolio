import React, { Component } from 'react'
import Slide from './Slide'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const image1 = "https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Leaflet.webp"
const image2 = "https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Website_Mockup.webp"
const image3 = "https://static.wixstatic.com/media/9dbeebdedcd94c2489ccaca2b9fd1aa4.jpg/v1/crop/x_783,y_0,w_2172,h_2725/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/App%20Screen.webp"


export default class SlideShows extends Component {
    state ={
        slides: [
            {
                id: 0,
                title: 'TweetsTrend',
                subTitle: 'A Sentiment Analysis project for tweets using Spark, React, Spring Boot',
                description: "",
                imgSrc: "https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Leaflet.webp",
                link: 'https://github.com/chenyyxx/TweetsTrend',
                selected: false
            },
            {
                id: 1,
                title: 'EventS',
                subTitle: 'Events Explore and Recommendation WebSite',
                description: "",
                imgSrc: "https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Website_Mockup.webp",
                link: 'https://github.com/chenyyxx/EventS',
                selected: false
            },
            {
                id: 2,
                title: 'Ways',
                subTitle: 'LBS based Android App for Smart Driving',
                description: "",
                imgSrc: "https://static.wixstatic.com/media/9dbeebdedcd94c2489ccaca2b9fd1aa4.jpg/v1/crop/x_783,y_0,w_2172,h_2725/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/App%20Screen.webp",
                link: 'https://github.com/chenyyxx/Ways',
                selected: false
            },
        ]
    }

    handleCardClick =(id, slide) => {
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

    makeSlides = (slide) => {
        return slide.map(slide => {
            return  <Slide
                        slide={slide}
                        click={(e => this.handleSlideClick(slide.id, e))}
                        key={slide.id}
                    />
        })
    }

    render() {
        return (
            <div className="slide-show">
                {this.makeSlides(this.state.slides)}
                {/* <Slide link={image1} />
                <Slide link={image2} />
                <Slide link={image3} /> */}
            </div>
        )
    }
}
