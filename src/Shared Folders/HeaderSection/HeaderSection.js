import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderSection.css'

const HeaderSection = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href='/home'>
                    {/* <Logo
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
                    Dice Roller
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className='nav-link' to={'/home'}>Home</Link>
                        <Link className='nav-link' to={'/about'}>About</Link>
                        <Link className='nav-link' to={'/checkout'}>Checkout</Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        {/* <Nav.Link to={'/login'}>Login</Nav.Link> */}
                        <Link className='nav-link' to={'/login'}>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default HeaderSection;