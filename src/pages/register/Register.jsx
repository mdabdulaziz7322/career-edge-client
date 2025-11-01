import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/Lotties/Register.json';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';



const Register = () => {

  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const countryCode = form.countryCode.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const photoURL = form.photoURL.value;
    const role = form.role.value;
    console.log(name, countryCode, phone, address, photoURL, role, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        const userData = {
          name,
          email,
          password,
          phone: `${countryCode} ${phone}`,
          address,
          photoURL,
          role,
        };

        axios.post('http://localhost:3000/users', userData)
          .then(response => {
            console.log('User registered successfully:', response.data);
            if (response.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registered Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            }
            form.reset();
            navigate('/');
          })

      })
      .catch(error => {
        console.error(error);

        // ⚠️ Handle specific Firebase auth errors
        if (error.code === "auth/email-already-in-use") {
          alert("This email is already registered. Please sign in instead.");
        } else if (error.code === "auth/invalid-email") {
          alert("Invalid email address. Please check and try again.");
        } else if (error.code === "auth/weak-password") {
          alert("Password should be at least 6 characters.");
        } else {
          alert("Something went wrong. Please try again.");
        }
      });


  }

  return (
    <div className="hero bg-base-200 min-h-screen pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left">

          <Lottie style={{ width: '300px' }} animationData={registerLottie} loop={true}></Lottie>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg mb-10">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Phone Number with Country Code */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    className="select select-bordered w-1/3"
                    defaultValue="+1"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>

                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="1234567890"
                    className="input input-bordered w-2/3"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-semibold">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="City, Country"
                  className="input input-bordered"
                />
              </div>

              {/* Profile Picture URL */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-semibold">
                    Profile Picture URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered"
                />
              </div>

              {/* Role Selection */}
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text font-semibold">Register As</span>
                </label>
                <select
                  name="role"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Register As</option>
                  <option value="applicant">Applicant</option>
                  <option value="recruiter">Recruiter</option>
                </select>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a className="link link-hover text-sm text-[#38a3a5]">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button className="btn border-2 text-white rounded-lg w-full   bg-[#38a3a5] mt-4">Register</button>

            </form>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;