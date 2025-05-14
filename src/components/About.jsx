import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Con from '../assets/mess.gif';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
const About = () => {
  return (
 <>
    <Navbar bg="secondary" data-bs-theme="light" className='py-2 px-2'>
        <Container>
          <Navbar.Brand href="/" className='fs-3 py-2'><FaShoppingCart className="me-2" />Ecart Shopping</Navbar.Brand>
          <Nav className="me-auto fs-5">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Form>
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search here..."
              />
              <Button type="submit" variant="info">Search</Button>
            </InputGroup>
          </Form>

        </Container>
      </Navbar>
      <h1>This is about</h1>
 </>
  )
}

export default About
