import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/Lotties/Register.json';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { useNavigate } from 'react-router';


const Register = () => {

    const {createUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();  
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

      createUser (email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/signin');
        })
        .catch(error => console.error(error));


    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      
      <Lottie style={{width: '300px'}} animationData={registerLottie} loop={true}></Lottie>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} >
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn border-2 text-white rounded-lg   bg-[#38a3a5] mt-4">Register</button>
        </fieldset>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;