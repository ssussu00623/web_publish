import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";


export default function Header() {
    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    shoppy2
                </Link>
                <nav className='header-right'>
                    <Link to= '/all'>products</Link>
                    <Link to= '/cart'>MyCart</Link>
                    <Link to= '/login'><button type='button'>Login</button></Link>
                    <Link to= '/signup'><button type='button'>Signup</button></Link>
                </nav>
            </div>
        </div>
    );
}

