import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let errorElement;
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        console.log(from);
        navigate(from, { replace: true });
    }
    const navigateRegister = () => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Please, Check you email and set new password');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='container w-50 mx-auto' style={{ height: '500px' }}>
            <h3 className='text-primary text-center mt-2 mb-3'>Please Login</h3>
            <div className='container w-50 mx-auto'>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p>New to Photo Studio? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget password? <span onClick={resetPassword} style={{ cursor: 'pointer' }} className='text-primary text-decoration-none'>Reset Password</span></p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;