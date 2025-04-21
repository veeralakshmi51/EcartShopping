import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Con from '../assets/mess.gif'
const Contact = () => {
  return (
    <div className='b-2 m'>
      <Container className='mt-5 mb-5 '>
      <Form className='border border-warning rounded p-4 shadow-sm'>
      <Row>
          <Col md={7}>
            <img src={Con} alt='contact' height={500} width={500} />
          </Col>
          <Col md={5}>
          <h2 className='mb-4'>Need Support</h2>

            <Row>
              <Form.Group controlId='username'>
                <Form.Label className='my-2'>Username</Form.Label>
                <Form.Control type='text' placeholder='Enter Your Name'></Form.Control>
              </Form.Group>
              <Form.Group controlId='emailaddress' >
                <Form.Label className='my-2'>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Your Email'></Form.Control>
              </Form.Group>
              <Form.Group controlId='message'>
                <Form.Label  className='my-2'>Message</Form.Label>
                <Form.Control as='textarea' rows={6} placeholder='Type your message here'></Form.Control>
              </Form.Group>
            </Row>
           <Button type='submit' variant='primary' className='my-4'>SEND</Button>
          </Col>
        </Row>
      </Form>
    </Container>
    </div>
  );
};

export default Contact;
