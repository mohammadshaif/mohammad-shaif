import React from 'react';
import './Header.css'
import sign from '../../Images/signature.png';
import {  Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='menuBar'>
            <Container>  
                <Navbar  expand="lg">
                    <Navbar.Brand><Link to='/'><img src={sign} alt="signature"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{background:'#ffff !important'}} id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                        <Nav.Link ><Link to='/about'>About</Link></Nav.Link>
                        <Nav.Link ><Link to='/Projects'>Projects</Link></Nav.Link>
                        <Nav.Link ><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link ><Link to='/contact'>Contact</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;