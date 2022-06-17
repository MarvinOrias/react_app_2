import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function AppNavBar(){
  return(
        <Navbar fixed="top" style={{backgroundColor: '#4F565E'}} expand="md">
            <Navbar.Brand href="#home" style={{color: '#F9AE51'}} className="brand">Drebin's</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} style={{color: '#F9AE51'}} to="/home">Home</Nav.Link>
                <Nav.Link href="#link" style={{color: '#F9AE51'}}>Products</Nav.Link>
                {/*<Nav.Link href="#link" style={{color: '#F9AE51'}}>Login</Nav.Link>
                <Nav.Link href="link" style={{color: '#F9AE51'}}>Register</Nav.Link>*/}
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}