import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImg from '../images/logo.png'
import { Link } from 'react-router-dom';
const NavbarComp = () => {
  return (
    <header className=''>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home"><img src={logoImg} className='logo-img'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className='link-nav' to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className='link-nav' to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link className='link-nav' to='/contactus'>Contact</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavbarComp