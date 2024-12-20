import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export default function FooterContent({icon,link}) {
    return (
        <div>
            <a className="contact__link" 
                href={link}>
                <FontAwesomeIcon icon={{icon}} />
                </a>
        </div>
    );
}

