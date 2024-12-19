import React from 'react';

export default function Header({children}) {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo__img" src="/images/project/favicon.ico" alt="logo"/>
                <h1 className="header__logo__title">Judy</h1>
            </div>
            <nav>
                {children}
            </nav>
            <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
        
    );
}

