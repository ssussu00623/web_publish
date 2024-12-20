import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function Footer({children}) {
    return (
        <div>
            <footer id="contact" className="section">
                <h2 className="title">Let's talk</h2>
                <p className="description">jeon.developer.judy@gmail.com</p>
                <ul className="contact__links">
                    {children}
                </ul>
                <p>Dream Software Engineer Judy - All right reserved</p>
            </footer>
        </div>
    );
}

