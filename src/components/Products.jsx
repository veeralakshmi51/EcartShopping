import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import watch from '../assets/watch.png'
import smarttv from '../assets/smart.png';
import speaker from '../assets/speaker.png';
import play from '../assets/play.png';
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        console.log('watch selected');
        navigate('/productlist')
    }
    return (
        <>
            <Container className='my-5'>
                <Row className="g-4">
                    <Col md={3}>
                        <Card className='p-5 h-100 b-2'>
                            <Card.Img variant="top" src={watch} />
                            <Card.Body>
                                <Card.Title>Smart Watch</Card.Title>
                                <Card.Text>
                                    A smart watch is a wearable gadget that connects to your phone to show notifications, track fitness, and more — all from your wrist.
                                </Card.Text>
                                <Button variant="secondary" onClick={handleChange}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='p-5 h-100 b-2'>
                            <Card.Img variant="top" src={speaker} />
                            <Card.Body>
                                <Card.Title>Bluetooth Speaker</Card.Title>
                                <Card.Text>
                                    A wireless audio device that plays music via Bluetooth. Portable and perfect for any setting.
                                </Card.Text>
                                <Button variant="secondary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='p-5 h-100 b-2'>
                            <Card.Img variant="top" src={smarttv} className='h-100' />
                            <Card.Body>
                                <Card.Title>Smart TV</Card.Title>
                                <Card.Text>
                                    A TV with built-in internet and apps for streaming movies, shows, and more — all in one device.
                                </Card.Text>
                                <Button variant="secondary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='p-5 h-100 b-2'>
                            <Card.Img variant="top" src={play} className='h-100' />
                            <Card.Body>
                                <Card.Title>Play Station</Card.Title>
                                <Card.Text>
                                    PlayStation is a popular gaming console developed by Sony, known for its cutting-edge graphics, immersive gameplay, and exclusive blockbuster titles like God of War, Spider-Man, and The Last of Us.
                                </Card.Text>
                                <Button variant="secondary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Products
