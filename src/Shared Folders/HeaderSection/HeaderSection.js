import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import hot from '../../../src/images/logo/hot.png'
import './HeaderSection.css'

const HeaderSection = () => {
    const handleSignout = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);
    return (

        <Navbar collapseOnSelect expand="lg" bg="info" sticky="top" >
            <Container>
                <Navbar.Brand href='/home'>
                    <img className="d-inline-block align-top px-3" src={hot} alt="" />

                    Tour Mania
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className='nav-link' to={'/home'}>Home</Link>
                        <Link className='nav-link' to={'/about'}>About</Link>
                        <Link className='nav-link' to={'/Blog'}>Blog</Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        {
                            user ?
                                <Button onClick={handleSignout} className='nav-link' variant="link">Signout</Button>
                                :
                                <Link className='nav-link' to={'/login'}>Login</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default HeaderSection;