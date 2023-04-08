import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='w-full flex justify-center py-8 gap-8 text-blue-700 font-semibold'>
            <Link className='hover:text-red-700 ' to='/' >Home</Link>
            <Link className='hover:text-red-700 ' to='/review' >Order Review</Link>
            <Link className='hover:text-red-700 ' to='/about' >About</Link>
            <Link className='hover:text-red-700 ' to='/contact' >Contact</Link>
        </nav>
    );
};

export default Header;