import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImg from '../images/logo.png'
const NavbarComp = () => {
  return (
    <header className=''>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home"><img src={logoImg} className='logo-img'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">AboutUs</Nav.Link>
            <Nav.Link href="#pricing">ContactUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavbarComp