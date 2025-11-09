import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div>
            <ul className=' flex gap-8 items-center justify-center mt-5'>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">All Games</a>
                </li>
                <li>
                    <a href="">My Profile</a>
                </li>
            </ul>

            <div className='poppins-regular flex items-center content-center justify-center min-h-screen'>
                <fieldset className="fieldset w-188 h-175 rounded-2xl bg-white border-base-300 border flex flex-col items-center justify-center">
                    <h1 className="text-[#403F3F] font-normal text-[2.188rem] ">Login your Account</h1>

                    <section className='mt-25'>

                        <div>
                            <label className="text-[#403F3F] label text-[1.25rem]">Email address</label>
                            <input
                                type="email"
                                className="input w-full bg-[#2A2A2A] text-white placeholder-[#B0B0B0] border border-[#3C3C3C] focus:outline-none focus:border-[#00C3FF]"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className='mt-2.5'>
                            <label className="text-[#403F3F] label text-[1.25rem]">Password</label>
                            <input
                                type="password"
                                className="input validator w-full bg-[#2A2A2A] text-white placeholder-[#B0B0B0] border border-[#3C3C3C] focus:outline-none focus:border-[#00C3FF]"
                                required placeholder="Enter your password"
                                minlength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 8 characters, lowercase letter, uppercase letter"
                            />
                            <p className="validator-hint">
                                Must be more than 6 characters, including
                                <br />At least one lowercase letter
                                <br />At least one uppercase letter
                            </p>
                        </div>
                        <button>
                            <h3 className='text-red-500 cursor-pointer'>Forgot Password ?</h3>
                        </button>
                    </section>
                    <button className="btn btn-wide bg-black max-w-[20rem] font-normal text-white">Login</button>
                    <h3 className='text-black'>Don't Have An Account ?
                        <button>
                            <span className='text-red-600 cursor-pointer'>Register</span>
                        </button> </h3>
                </fieldset>
            </div>
        </div>
    );
};

export default Login;