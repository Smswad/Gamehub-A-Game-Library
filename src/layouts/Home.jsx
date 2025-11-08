import { LogIn, User } from 'lucide-react';
import React from 'react';

const Home = () => {
    return (
        <div className='orbitron-normal'>
            <header className="absolute top-0 left-0 w-full z-50">
                <div className=' p-7 flex items-center justify-between'>
                    <div className='flex gap-3.5'>
                        <img src="/src/images/64px-Rockstar_Games_Logo.svg.png" alt="" srcset="" />
                        <h1 className='text-5xl'>GameHub</h1>
                    </div>
                    <ul className='flex gap-8'>
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
                    <ul className='flex gap-5'>
                        <li><a href="">Login</a></li>
                        <li><a href="">Registration</a></li>
                        <li>
                            <a href=""><User></User></a>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="carousel w-full h-280">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="/images/rdr2-cover-pic.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="/images/PUBG-cover.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="/images/GTAV-cover.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="/images/cyberpunk-cover.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mt-7'>
                    <h1 className='mb-2.5 text-4xl'>Popular Games</h1>
                    <div className="carousel carousel-center rounded-box">
                        <div className="carousel-item">
                            <img className='h-100'
                                src="/images/GOT-DC.jpg" alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img className='h-100'
                                src="/images/RDR2.jpg"
                                alt="Pizza" />
                        </div>
                        <div className="carousel-item">
                            <img className='h-100'
                                src="/images/lou-2.jpg"
                                alt="Pizza" />
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer mt-5 sm:footer-horizontal bg-base-200 text-base-content p-10 poppins-regular">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Home;