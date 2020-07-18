import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Header(props) {
    return (
        <Navbar className="pl-5 pr-5 sde_header" fixed="top" variant="">
            <Navbar.Collapse className="align-items-end">
                <div className="box"></div>
                <a href="/" className="custom_link my_name">Yuxiang Chen</a>
                <a className="custom_link my_position">/</a>
                <a className="custom_link my_position">SOFTWARE ENGINEER</a>
            </Navbar.Collapse>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" defaultActiveKey={props.link}>
                    <Nav.Link className="custom_link" href="/software_engineer/about">ABOUT ME</Nav.Link>
                    <Nav.Link className="custom_link" href="/software_enginee/experience">EXPERIENCE</Nav.Link>
                    <Nav.Link className="custom_link" href="/software_enginee/projects">PROJECTS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
