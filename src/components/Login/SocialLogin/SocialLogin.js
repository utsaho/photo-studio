import React from 'react';
import googleLogo from '../../../images/Social/google-logo.png';
import githubLogo from '../../../images/Social/github-lobo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithTGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorEement;
    if (error || error1) {
        errorEement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            {errorEement}
            <div>
                <button onClick={() => signInWithTGoogle()} className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <img style={{ width: '30px' }} src={googleLogo} alt="" />
                    Google SignIn
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={githubLogo} alt="" />
                    Github SignIn
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;