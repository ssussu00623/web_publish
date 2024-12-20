import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

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
                <FontAwesomeIcon
                    icon={faBars} />
            </button>
        </header>
        
    );
}

