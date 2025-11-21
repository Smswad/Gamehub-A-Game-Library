import React, { use } from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log({ name, email, photo, password });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    return (
        <div>
            <div>
                <Header></Header>

                <div className='poppins-regular flex items-center content-center justify-center min-h-screen'>
                    <fieldset className="fieldset w-188 h-175 rounded-2xl bg-white border-base-300 border flex flex-col items-center justify-center">
                        <h1 className="text-[#403F3F] font-normal text-[2.188rem] ">Register your account</h1>

                        <form onSubmit={handleRegister} className='mt-10'>

                            <div className='mt-2.5'>
                                <label className="text-[#403F3F] label text-[1.25rem]">Your Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input w-full bg-[#2A2A2A] text-white placeholder-[#B0B0B0] border border-[#3C3C3C] focus:outline-none focus:border-[#00C3FF]"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className='mt-2.5'>
                                <label className="text-[#403F3F] label text-[1.25rem]">Photo URL</label>
                                <input
                                    name='photo'
                                    type="text"
                                    className="input w-full bg-[#2A2A2A] text-white placeholder-[#B0B0B0] border border-[#3C3C3C] focus:outline-none focus:border-[#00C3FF]"
                                    placeholder="Enter your photo url"
                                    required
                                />
                            </div>
                            <div className='mt-2.5'>
                                <label className="text-[#403F3F] label text-[1.25rem]">Email address</label>
                                <input
                                    name='email'
                                    type="email"
                                    className="input w-full bg-[#2A2A2A] text-white placeholder-[#B0B0B0] border border-[#3C3C3C] focus:outline-none focus:border-[#00C3FF]"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                            <div className='mt-2.5'>
                                <label className="text-[#403F3F] label text-[1.25rem]">Password</label>
                                <input
                                    name='password'
                                    type="password"
                                    className="input validator w-full bg-[#2A2A2A] text-white placeholder-[#B0B0B0] border border-[#3C3C3C] focus:outline-none focus:border-[#00C3FF]"
                                    required
                                    placeholder="Enter your password"
                                    minlength="6"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                    title="Must be more than 6 characters, lowercase letter, uppercase letter"
                                />
                                <p className="validator-hint">
                                    Must be more than 6 characters, including
                                    <br />At least one lowercase letter
                                    <br />At least one uppercase letter
                                </p>

                            </div>

                            <fieldset className="mt-2.5 fieldset bg-[#2A2A2A] border-base-300 rounded-box max-w-[20rem] border p-2">
                                <label className="label">
                                    <input
                                        required
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox  text-white" />
                                    Accept Term & Conditions
                                </label>
                            </fieldset>
                            <button type='submit' className="btn btn-wide bg-black max-w-[20rem] font-normal mt-2.5 text-white">Register</button>
                        </form>
                        <h3 className='text-black'>Already Have An Account ? <Link to="/auth/login" className='text-red-600 cursor-pointer'>LogIn</Link></h3>
                    </fieldset>


                </div>
            </div>
        </div>
    );
};

export default Register;