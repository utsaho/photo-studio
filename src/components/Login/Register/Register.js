import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const ConfirmPasswordRef = useRef('');
    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;
        if (password === confirmPassword) {

            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            toast('Profile creaded');
            navigate('/home');
        }
        else {
            toast('password doesn\'t match!');
        }
    }

    return (
        <div className='register-form container text-center align-center'>
            <h3 className='text-primary text-center mt-2 mb-3'>Please Register</h3>
            <div className="container w-50">

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control ref={nameRef} type="text" placeholder="Your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control ref={ConfirmPasswordRef} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className={`mb-3 text-start ${agree ? 'text-success' : 'text-danger'}`} controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Please Accept term and conditions of 'Photo Studio'" />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!agree}>
                        Register
                    </Button>
                </Form>
                <p>Already user? <Link to='/login' className='text-primary text-decoration-none'>Please Login</Link></p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Register;