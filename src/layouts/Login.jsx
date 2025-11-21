import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import Header from '../components/Header';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
    }
    return (
        <div>
            <Header></Header>

            <form onSubmit={handleLogin} className='poppins-regular flex items-center content-center justify-center min-h-screen'>
                <fieldset className="fieldset w-188 h-175 rounded-2xl bg-white border-base-300 border flex flex-col items-center justify-center">
                    <h1 className="text-[#403F3F] font-normal text-[2.188rem] ">Login your Account</h1>

                    <section className='mt-10'>

                        <div>
                            <label className="text-[#403F3F] label text-[1.25rem]">Email address</label>
                            <input
                                name='email'
                                type="email"
                                className="input w-full bg-[#2A2A2A] text-white placeholder-[#B0B0B0] border border-[#3C3C3C] focus:outline-none focus:border-[#00C3FF]"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className='mt-2.5'>
                            <label className="text-[#403F3F] label text-[1.25rem]">Password</label>
                            <input
                                name='password'
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
                            <h3 className='text-black cursor-pointer'>
                                <a className='link link-hover'>Forgot Password ?</a>
                            </h3>
                        </button>
                    </section>
                    <button className="btn btn-wide bg-black max-w-[20rem] font-normal text-white">Login</button>
                    <h3 className='text-black'>Don't Have An Account ?
                        <button type='submit'>
                            <Link to="/auth/register" className='text-red-600 cursor-pointer'>Register</Link>
                        </button> </h3>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;