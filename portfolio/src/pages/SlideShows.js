import React, { Component } from 'react'
import Slide from './Slide'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const image1 = "https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Leaflet.webp"
const image2 = "https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Website_Mockup.webp"
const image3 = "https://static.wixstatic.com/media/9dbeebdedcd94c2489ccaca2b9fd1aa4.jpg/v1/crop/x_783,y_0,w_2172,h_2725/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/App%20Screen.webp"


export default class SlideShows extends Component {

    handleSlideClick =(id, slide) => {
        // let slides = [...this.props.slides]
        // slides[id].selected = slides[id].selected ? false: true;

        // slides.forEach(slide => {
        //     if(slide.id !== id) {
        //         slide.selected = false;
        //     }
        // });

        // this.setState({
        //     slides
        // });
        this.props.handleSelect(id, slide);
        // console.log(slides)
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
                {this.makeSlides(this.props.slides)}
                {/* <Slide link={image1} />
                <Slide link={image2} />
                <Slide link={image3} /> */}
            </div>
        )
    }
}
