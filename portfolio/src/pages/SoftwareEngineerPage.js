import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom';

import MyPic from '../assets/images/MyPic.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default class SoftwareEngineerPage extends Component {
    toGithub=()=> {
        window.open("https://github.com/chenyyxx");
    }
    toLinkedin=()=> {
        window.open("https://www.linkedin.com/in/yuxiang-chen-1204/");
    }
    toFacebook=()=> {
        window.open("https://www.facebook.com/profile.php?id=100006959746248");
    }
    toEmail=()=> {
        window.open();
    }
    
    render() {
        return (
            <div className="position-relative">
                <Navbar className="pl-5 pr-5 sde_header" fixed="top">
                    <Navbar.Collapse className="align-items-end">
                        <div className="box"></div>
                        <a href="/" className="custom_link my_name">Yuxiang Chen</a>
                        <a className="custom_link my_position">/</a>
                        <a className="custom_link my_position">SOFTWARE ENGINEER</a>
                    </Navbar.Collapse>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" defaultActiveKey="/software_engineer/about">
                            <Nav.Link href="/software_engineer/about">ABOUT ME</Nav.Link>
                            <Nav.Link href="/software_enginee/experience">EXPERIENCE</Nav.Link>
                            <Nav.Link href="/software_enginee/projects">PROJECTS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
                        <div className="info_bar">
                            <FontAwesomeIcon icon={faGithub} size="lg" onClick={this.toGithub}/>
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" onClick={this.toLinkedin}/>
                            <FontAwesomeIcon icon={faFacebook} size="lg" onClick={this.toFacebook}/>
                            <FontAwesomeIcon icon={faEnvelope} size="lg" onClick={this.toEmail}/>
                        </div>
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
                <Navbar className="pl-5 pr-5 sde_footer" >
                    <Navbar.Collapse className="align-items-end">
                        <p className="text-center mb-0">Created by Yuxiang Chen @ 2020.</p>
                    </Navbar.Collapse>
                    
                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end mr-4">
                        <div className="footer_contact">
                            <p className="font-weight-bolder text-center mb-3"> Follow </p> 
                            <div className="footer_icon_bar">
                                <FontAwesomeIcon icon={faGithub} size="md" onClick={this.toGithub}/>
                                <FontAwesomeIcon icon={faLinkedinIn} size="md" onClick={this.toLinkedin}/>
                                <FontAwesomeIcon icon={faFacebook} size="md" onClick={this.toFacebook}/>
                                <FontAwesomeIcon icon={faEnvelope} size="md" onClick={this.toEmail}/>
                            </div>   
                        </div>
                        
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
        )
    }
}
