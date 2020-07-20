import React, { Component } from 'react'
import Slide from './Slide'




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
