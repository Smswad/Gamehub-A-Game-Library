import { User } from 'lucide-react';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        console.log("User Logout!");
        logOut().then(() => {
            alert("Sign-out successful.")
        }).catch((error) => {
            console.log(error);
        });

    }
    return (
        <div>
            <header className="orbitron-normal absolute top-0 left-0 w-full z-50">
                <div className=' p-7 flex items-center justify-between'>
                    <div className='flex gap-3.5'>
                        <img src="/src/images/64px-Rockstar_Games_Logo.svg.png" alt="" srcset="" />
                        <h1 className='text-5xl'>GameHub</h1>
                    </div>
                    <ul className='flex gap-8'>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <a href="">All Games</a>
                        </li>
                        <li>
                            <a href="">My Profile</a>
                        </li>
                    </ul>
                    <ul className='flex gap-5'>

                        {
                            user ? (
                                <li onClick={handleLogOut}><Link to="">Logout</Link></li>
                            ) : (
                                <li><Link to="/auth/login">Login</Link></li>
                            )}
                        <li><Link to="/auth/register">Registration</Link></li>
                        <li>
                            <Link href="">
                                <User></User>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className=''>{user && user.email}</div>
            </header>
        </div>
    );
};

export default Header;