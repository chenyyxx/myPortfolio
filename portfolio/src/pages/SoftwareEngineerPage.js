import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import MyPic from '../assets/images/MyPic.jpeg';
import Header from '../components/Header'
import Footer from '../components/Footer'
import IconBar from '../components/IconBar';

export default class SoftwareEngineerPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            link: "/software_engineer/about",
        }
    }
    
    render() {
        return (
            <div className="position-relative">
                <Header link={this.state.link} />
                <div>
                    <div className="info_card">
                        <Container className="info_main d-flex justify-content-center">
                            <Row> 
                                <Col className="info">
                                    <Image className="selfie" src={MyPic} roundedCircle />
                                    <div>
                                        <h1 className="my_name">Yuxiang</h1>
                                        <h1 className="my_name">Chen</h1>
                                    </div>
                                    <div className="line"></div>
                                    <div className="my_position pl-0">SOFTWARE ENGINEER </div>
                                </Col>
                            </Row>
                        </Container>
                        <IconBar style="info_bar" size="lg" />
                    </div>
                    <div className="d-flex">
                        <div className="leftCol"></div>
                        <div className="rightCol d-flex align-items-center">
                            <Jumbotron className="bg-transparent jumbo">
                                <h1 className="display-1 font-weight-bolder">Hello</h1>
                                <h3 className="display-10 font-weight-bolder">Here's who I am & what I do</h3>
                                <br/>
                                <p>
                                    Software Engineer candidate with strong background in programming, analytic and system designing. 
                                    Have 3 years of project experience, including cross-platform mobile and web development and machine learning. 
                                    Solid in computer science, mathematics and statistics. Expert in Java, JavaScript, Python and SQL. 
                                    Skilled in data science, statistical modeling, and machine learning.
                                </p>
                                <br/>
                                <p >
                                    <Button className="main_button lead font-weight-bolder mr-2" variant="primary">RESUME</Button>
                                    <Button href="/software_enginner/projects" className="main_button lead font-weight-bolder" variant="outline-primary">PROJECTS</Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </div>
                </div>
                <Footer github={this.openUrl}/>         
            </div>
        )
    }
}
