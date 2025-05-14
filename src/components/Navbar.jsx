import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
const Navbar = () => {
    return (
        <>
            <Navbar bg="secondary" data-bs-theme="light" className='py-2 px-2'>
                <Container>
                    <Navbar.Brand href="/" className='fs-3 py-2'><FaShoppingCart className="me-2" />Ecart Shopping</Navbar.Brand>
                    <Nav className="me-auto fs-5">
                        <Nav.Link href="/home" >Home</Nav.Link>
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
            </Navbar></>
    )
}

export default Navbar
