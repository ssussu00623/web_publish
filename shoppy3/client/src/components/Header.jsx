import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-outer'>
            <div className='header'>
                <div className='header-left'>
                    <img src="./public/images/banner.jpg" alt="" /> <span>
                        <Link to='/' className='header-left'>
                        Shoppy
                        </Link>
                        </span>
                </div>
                <div className='header-right'>
                    <nav> 
                        <Link to='/all'> Product </Link> 
                        <Link to='/cart'>Cart</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='signup'>SignUp</Link> 
                    </nav>
                </div>
                </div>  
        </div>
    );
}

