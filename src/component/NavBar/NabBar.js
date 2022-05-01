import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const NabBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container className='items'>
                    <Navbar.Brand href="#home">
                        <img className='logo' src={logo} alt="" srcset="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-list">
                            <Nav.Link as={Link} className= 'item' to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} className= 'item' to='/item'>Items</Nav.Link>
                            <Nav.Link as={Link} className= 'item' to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} className={({ selected }) => (selected ? 'selected-item' : 'item')} to='/contact'>Contact</Nav.Link>
                            <Nav.Link as={Link} className={({ selected }) => (selected ? 'selected-item' : 'item')} to='/login'>Login</Nav.Link>
                        </Nav>





                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NabBar;