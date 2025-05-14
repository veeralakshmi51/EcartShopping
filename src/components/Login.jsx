import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import LoginImage from '../assets/login.png';
import { FaUser } from 'react-icons/fa'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firbaseConfig';
import axios from 'axios';
const Login = () => {
const[userDetails,setUserDetails]=useState({
    email:"",
    password:""
})
    const navigate = useNavigate();
    // const handleLogin =async (e) => {
    //     e.preventDefault();
    //     setUser("");
    //     setPass("");
    //     // if (user === 'veera' && pass === '123') {
    //     //     setUser(user);
    //     //     setPass(pass);
    //     //     console.log(user);
    //     //     console.log(pass);
    //     //     console.log('user details',user,pass);
    //     //     console.log('Logged in successfully');
    //     //     navigate('/home');

    //     // }
    //     // else{
    //     //     alert('Invalid user!!!');
    //     //     setUser('');
    //     //     setPass('');
    //     // }
    //    try{
    //     await signInWithEmailAndPassword(auth,user,pass);
    //     console.log("Logged in successfully");
    //     navigate('/home')

    //    }catch{
    //     console.log("invalid user credebtials");
    //     alert("Invalid user");

    //    }
    // }
    const handleLogin = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8081/login",userDetails);
        console.log("username",userDetails.email);
        console.log("pass", userDetails.password);
           navigate('/home')
    }
     const handleInput = (event) => {
        setUserDetails((prevEvent) => ({ ...prevEvent, [event.target.name]: event.target.value }))
    }
    return (
        <>

            <div style={{ backgroundImage: `url(${LoginImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Form style={{
                    padding: '40px',
                    borderRadius: '10px',
                    width: '30%',
                    minWidth: '300px'
                }}
                onSubmit={handleLogin}>                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginBottom: '20px', backgroundColor: 'transparent' }}>
                        <FaUser style={{ color: 'GrayText', height: '150px', width: '150px', borderRadius: '50%' }} />

                    </div>
                    <h3 style={{ backgroundColor: 'transparent', textAlign: 'center' }}>Login</h3>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="abc@example.com" onChange={handleInput} name='email' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="your password" onChange={handleInput} name='password'/>
                    </Form.Group>
                    <Button onClick={handleLogin} variant='info' className='w-100 mt-2' style={{ fontSize: '20px' }}>Click to Login</Button>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginBottom: '20px', backgroundColor: 'transparent', marginTop: '20px' }}>
                        <p>Don't have an account?  <a href='/register' style={{ textDecorationLine: 'none', marginLeft: '10px' }}> SignUp / Register</a></p>
                    </div>
                </Form>
            </div>


        </>
    )
}

export default Login
