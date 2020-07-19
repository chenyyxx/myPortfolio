import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide from './Slide'

const image1 = "https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Leaflet.webp"
const image2 = "https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Website_Mockup.webp"
const image3 = "https://static.wixstatic.com/media/9dbeebdedcd94c2489ccaca2b9fd1aa4.jpg/v1/crop/x_783,y_0,w_2172,h_2725/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/App%20Screen.webp"

export default class SlideShows extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        /> */}
                    <Slide link={image1} />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Slide link={image1} />
                    {/* <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    /> */}

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Slide link={image1} />
                    {/* <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    /> */}

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
