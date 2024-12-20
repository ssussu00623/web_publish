import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export default function FooterContent({img,link}) {
    return (
        <div>
            <a className="contact__link" 
                href={link}>
                <img src={img} />
            </a>
        </div>
    );
}

