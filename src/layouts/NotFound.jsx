import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='bg-[#FB8133] h-screen w-full flex flex-col items-center justify-center'>
            <img className='max-w-full h-auto object-contain' src="/public/images/404-error.png" alt="" />
            <h3 className='text-[#565872] text-[1.063rem] rubik-normal font-semibold tracking-[0.25rem]'>OOPS!  PAGE  NOT  FOUND</h3>
            <Link to="/" className="btn btn-warning btn-wide mt-2.5 text-[0.75rem] rounded-3xl bg-white poppins-regular tracking-[0.063rem]">BACK TO HOME</Link>

        </div>
    );
};

export default NotFound;