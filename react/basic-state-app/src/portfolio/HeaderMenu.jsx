import React from 'react';

export default function HeaderMenu(href, name) {
    return (
        <div>
            <a  href={href}
            className="menu-item">{name}</a>  
        </div>
    );
}

