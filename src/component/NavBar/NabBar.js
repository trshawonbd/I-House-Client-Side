import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const NabBar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    return (
        <div >
            <Navbar collapseOnSelect expand="lg">
                <Container className='items'>
                    <Navbar.Brand as = {Link} to='/'>
                        <img className='logo' src={logo} alt="" srcset="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-list">
                            <Nav.Link as={Link} className= 'item' to='/home'>Home</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} className= 'item' to='/manageInventory'>Inventory</Nav.Link>
                                <Nav.Link as={Link} className= 'item' to='/addItem'>Add Items</Nav.Link>
                                <Nav.Link as={Link} className= 'item' to='/myItem'>My Items</Nav.Link>
                                </>

                            }

                            <Nav.Link as={Link} className= 'item' to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={Link} className= 'item' to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} className= 'item' to='/contact'>Contact</Nav.Link>

                            {
                                user ?  <button className='item' onClick={logout}>Log out</button> : 
                                <Nav.Link as={Link} className= 'item' to='/login'>Login</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NabBar;