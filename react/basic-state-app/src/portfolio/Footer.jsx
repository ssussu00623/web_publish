import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import FooterContentList from './FooterContentList';

export default function Footer() {
    return (
        <div>
            <footer id="contact" className="section">
                <h2 className="title">Let's talk</h2>
                <p className="description">jeon.developer.judy@gmail.com</p>
                <ul className="contact__links">
                    <FooterContentList />
                </ul>
                <p>Dream Software Engineer Judy - All right reserved</p>
            </footer>
        </div>
    );
}

