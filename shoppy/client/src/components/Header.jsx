import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

export default function Header({cartCount}) {
    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to='/all'>products</Link> 
                    {/* a태그처럼 링크를 타고 이동~ */}
                    <Link to='/cart'>MyCart({cartCount})</Link>
                    <Link to='/login'>
                        <button type='button'>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button type='button'>Signup</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

