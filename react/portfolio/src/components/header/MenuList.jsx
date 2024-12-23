import React from 'react';
import Menu from './Menu';

export default function MenuList() {
    const list = [
        {"href":"#home", "name":"home"},
        {"href":"#about", "name":"about"},
        {"href":"#skill", "name":"skill"},
        {"href":"#work", "name":"work"},
        {"href":"#testimonial", "name":"testimonial"},
        {"href":"#contact", "name":"contact"},
    ]
    return (
        <nav>
            <ul className="header__menu">
                {list &&list.map((menu)=>
                <li>
                    <Menu href={menu.href} menuname={menu.name}/>
                </li>
                )}
            </ul>
        </nav>
    );
}

