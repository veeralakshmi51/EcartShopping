import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Speaker from '../assets/speaker.png';
import Watch from '../assets/watch.png';
import { Button, Container } from 'react-bootstrap';
const ProductList = (props) => {
    const total = props.price + props.shippingCharge;
    const handlePay=()=>{
        alert('Amount Received');
    }
    return (
        <div className='m-5'>
            <Container>
                <Row>
                    <Col md={6} className='m-5'>
                        <img src={Watch} alt='speaker' height={400} width={400} />
                    </Col>
                    <Col md={4} className='py-5 shadow-lg '>
                        <div className='mb-4 d-flex justify-content-between'>
                            <h5>Cost of the product</h5>
                            <h3> - {props.price}</h3>
                        </div>
                        <div className='mb-4 d-flex justify-content-between'>
                            <h6>Shipping Charges (Tax includes) </h6>
                            <h6>     - {props.shippingCharge}</h6>

                        </div>
                        <hr></hr>
                        <div className='mb-4 d-flex justify-content-between'>
                            <h5>  Total Amount</h5>
                            <h5>{total}</h5>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-end mt-3">
                            <Button variant='warning' onClick={handlePay}>Proceed to Payment</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductList
