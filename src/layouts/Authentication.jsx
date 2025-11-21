import React from 'react';
import Login from './Login';
import Register from './Register';
import { Link, Outlet } from 'react-router';
import Header from '../components/Header';

const Authentication = () => {
    return (
        <div>
            <main className=''>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Authentication;