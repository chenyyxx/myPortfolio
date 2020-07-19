import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import SlideShows from './SlideShows';
import Summary from '../components/Summary';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Detail from '../components/Detail';



export default class SoftwareProject extends Component {
    render(){
        return (
            <div className="project-page">
                <Header link="/software_engineer/projects" />
                <div className="title-summary">
                    <Summary />
                </div>
                <div className="pl-0 main">
                    <SlideShows />
                </div>
                <Detail />
                <Footer />
            </div>
        )
    }
}
