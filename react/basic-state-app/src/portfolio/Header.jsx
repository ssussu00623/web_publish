import React, { useState, useEffect } from 'react';
import HeaderMenuList from './HeaderMenuList';

export default function Header() {
        const [menuList, setMenuList] = useState([]);
        useEffect (()=>{
            fetch("data/portfolio.json")
            .then(data=> data.json())
            .then(jsonData => {
                setMenuList(jsonData.menuList);
            })
        })
    return (
        <header className='header'>
<div className="header__logo">
        <img className="header__logo__img" src="./images/avata.png" alt="logo" />
        <h1 className="header__logo__title">Judy</h1>
    </div>
    <nav>
        <HeaderMenuList list={menuList} />
    </nav>
    <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
        <i className="fa-solid fa-bars"></i>
    </button>
        </header>
    );
}

