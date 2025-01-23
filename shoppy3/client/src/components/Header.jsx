import React from 'react';

export default function Header() {
    return (
        <div className='header-outer'>
            <div className='header'>
                <div className='header-left'>
                    <img src="./public/images/banner.jpg" alt="" /> <span>Shoppy</span>
                </div>
                <div className='header-right'>
                    <nav>
                    <span>product</span>
                    <span>cart</span>
                    <span>login</span>
                    <span>signup</span>
                    </nav>
                </div>
                </div>  
        </div>
    );
}

