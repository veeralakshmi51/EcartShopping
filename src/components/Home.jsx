import React from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import '../components/home.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { FaShoppingCart } from 'react-icons/fa';
// import Card from 'react-bootstrap/Card';
// import { FaSearch } from 'react-icons/fa';
// import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';
import Speaker from '../assets/speaker.png';
import TV from '../assets/smart.png';
import Watch from '../assets/watch.png';
import play from '../assets/play.png';
const Home = () => {
  return (
    <div className='mt-5'>
      <Carousel data-bs-theme='dark' >
        <Carousel.Item>
          <img className='d-block mx-auto' src={Speaker} alt='speaker' style={{width:'50%',height:'50%'}}/>
          <Carousel.Caption>
            {/* <h3>Bluetooth Speaker</h3>
            <p>A wireless audio device that plays music via Bluetooth. Portable and perfect for any setting.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block mx-auto ' src={Watch} alt='watch' style={{width:'30%',height:'50%'}}/>
          <Carousel.Caption className='m-1000'>
            {/* <h3>Smart Watch</h3>
            <p>A smart watch is a wearable gadget that connects to your phone to show notifications, track fitness, and more — all from your wrist.

            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block mx-auto' src={TV} alt='tv' style={{width:'50%',height:'50%'}}/>
          <Carousel.Caption>
            {/* <h3>Television</h3>
            <p>A TV with built-in internet and apps for streaming movies, shows, and more — all in one device.

            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block mx-auto' src={play} alt='play_station' style={{width:'40%',height:'50%'}}/>
          <Carousel.Caption>
            {/* <h3>Play Station</h3>
            <p>PlayStation is a popular gaming console developed by Sony, known for its cutting-edge graphics, immersive gameplay, and exclusive blockbuster titles like God of War, Spider-Man, and The Last of Us.

            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <footer className='text-center mt-2'>
        <Container>
          <p>&copy; {new Date().getFullYear()} Ecart Shopping. All rights Reserved.</p>
        </Container>
      </footer>
    </div>
  )
}

export default Home
