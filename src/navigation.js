import React from  'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//Navigation Bar
const Navigation = () => (
    <Navbar inverse id="navigation">
        <Navbar.Header>
            <Navbar.Brand>Our Site</Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to="/" exact><NavItem>Home</NavItem></LinkContainer>
            <LinkContainer to="/about" exact><NavItem>About</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
            <NavItem>Tester</NavItem>
        </Nav>
    </Navbar>
)

export default Navigation;