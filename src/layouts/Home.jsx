import { LogIn, User } from 'lucide-react';
import React from 'react';
import { Link, Links } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BannerSlider from '../components/BannerSlider';

const Home = () => {
    return (
        <div className='orbitron-normal'>
            <Header></Header>
            <main>
                <BannerSlider></BannerSlider>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;