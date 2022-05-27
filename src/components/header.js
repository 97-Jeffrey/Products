import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header =() =>{

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "80px"}}>
        <Container>
        <Navbar.Brand href="/">Online Product App</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="/products/create-product">Create A Product</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
    
  )
}

export default Header;