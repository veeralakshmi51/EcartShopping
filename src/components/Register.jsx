import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import LoginImage from '../assets/login.png';
import { FaUser } from 'react-icons/fa'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firbaseConfig';
import axios from 'axios';
const Register = () => {
    const navigate = useNavigate();
    const [userValues, setUserValues] = useState({
        name: "",
        email: "",
        password: ""
    })
    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     setUser("");
    //     setPass("");
    //     try {
    //         await createUserWithEmailAndPassword(auth, user, pass);
    //         console.log("User Successfully registered");
    //         console.log('userDetails',user,pass);
    //         navigate('/login')
    //     }
    //     catch {
    //         console.log("User not created");

    //     }
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/signupuser',userValues)
        .then((res)=>{
            console.log(res);
            navigate('/login');
        })
        .catch((error)=>{
            console.log(error);
        })
        console.log("User data sent to backend");
        navigate('/login');
    }

    const handleInput = (event) => {
        setUserValues((prevEvent) => ({ ...prevEvent, [event.target.name]: event.target.value }))
    }
    return (
        <div style={{ backgroundImage: `url(${LoginImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <Form style={{ padding: '40px', borderRadius: '10px', width: '30%', minWidth: '300px' }} onSubmit={handleSubmit}>
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginBottom: '20px', backgroundColor: 'transparent' }}>
                    <FaUser style={{ color: 'GrayText', height: '150px', width: '150px', borderRadius: '50%' }} />

                </div>
                <h3 style={{ backgroundColor: 'transparent', textAlign: 'center' }}>Login</h3>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Name" name='name' onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="abc@example.com" name='email' onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="your password" name="password"onChange={handleInput} />
                </Form.Group>

                <Button onClick={handleSubmit} variant='info' className='w-100 mt-2' style={{ fontSize: '20px' }}>Register Now</Button>
                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginBottom: '20px', backgroundColor: 'transparent', marginTop: '20px' }}>
                    <p>Have an account? <a href='/login' style={{ textDecorationLine: 'none', marginLeft: '10px' }}> SignIn/Login</a></p>
                </div>
            </Form>
        </div>
    )
}

export default Register
