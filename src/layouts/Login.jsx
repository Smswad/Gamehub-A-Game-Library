import React from 'react';

const Login = () => {
    return (
        <div className='poppins-regular flex items-center content-center justify-center min-h-screen'>
            {/* width: 47rem; height: 43.75rem; */}
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
                            className="input w-full bg-[#2A2A2A] text-white placeholder-[#B0B0B0] border border-[#3C3C3C] focus:outline-none focus:border-[#00C3FF]"
                            placeholder="Enter your password" />
                    </div>

                </section>
                <button className="btn btn-wide bg-black max-w-[20rem] mt-2.5 text-white">Login</button>
                <h3 className='text-black'>Don't Have An Account ? <span className='text-red-600 cursor-pointer'>Register</span></h3>
            </fieldset>

        </div>
    );
};

export default Login;