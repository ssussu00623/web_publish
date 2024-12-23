import React from 'react';

export default function Menu({href, menuname}) {
    return (
        <div>
            <a className="header__menu__item" href={href}>{menuname}</a>
        </div>
    );
}

