import React  from 'react'
import Navbar from 'react-bootstrap/Navbar'
import IconBar from './IconBar'

export default function Footer() {
    return (
        <Navbar className="pl-5 pr-5 sde_footer" fixed="bottom" >
            <Navbar.Collapse className="align-items-end">
                <p className="text-center mb-0">Created by Yuxiang Chen @ 2020.</p>
            </Navbar.Collapse>
            
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end mr-4">
                <div className="footer_contact">
                    <p className="font-weight-bolder text-center mb-3"> Follow </p> 
                    <IconBar style="footer_icon_bar" size="md"/>
                </div>
                
            </Navbar.Collapse>
        </Navbar>
    )
    
}
