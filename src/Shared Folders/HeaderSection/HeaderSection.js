import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import './HeaderSection.css'

const HeaderSection = () => {
    return (

        <Navbar className='navbar-light' variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    );
};

export default HeaderSection;