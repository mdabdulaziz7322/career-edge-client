import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SigninLottie from '../../assets/Lotties/Login and Sign up.json';
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { useNavigate } from 'react-router';

const SignIn = () => {
    const { signInUser } = use(AuthContext);

    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error));


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left">

                    <Lottie style={{ width: '300px' }} animationData={SigninLottie} loop={true}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold mb-4 text-center">Sign In now!</h1>
                        
                        <form onSubmit={handleSignIn} >
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn border-2 text-white rounded-lg   bg-[#38a3a5] mt-4">Sign In</button>
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;