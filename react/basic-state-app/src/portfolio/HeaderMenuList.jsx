import React from 'react';
import HeaderMenu from './HeaderMenu';

export default function HeaderMenuList(list) {
    return (
        <div>
            <ul className="header__menu">
            <li><a className="header__menu__item active" href="#home">Home</a></li>
                { list && list.map((item) => 
                    <li>
                        <HeaderMenu  
                        name={item.name} 
                        href={item.href}
                    /></li>) }
            </ul>
        </div>
    );
}

