import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import SlideShows from './SlideShows';
import Summary from '../components/Summary';


export default function SoftwareProject(props) {
        return (
            <div>
                <Header link="/software_engineer/projects" />
                <div className="main">
                    <Summary/>
                </div>
                <Footer/>
            </div>
        )
}
