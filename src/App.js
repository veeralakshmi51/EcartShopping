import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      <footer></footer>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
