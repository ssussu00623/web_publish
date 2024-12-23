import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobile} from '@fortawesome/free-solid-svg-icons'
import {faServer} from '@fortawesome/free-solid-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'

export default function Major({icon, title, subjects}) {
    return (
        <>
            {icon === 'mobile'&& 
                <FontAwesomeIcon className='major__icon' icon={faHtml5} />}
            {icon === 'html'&& 
            <FontAwesomeIcon className='major__icon' icon={faMobile} />}
            {icon === 'server'&& 
            <FontAwesomeIcon className='major__icon' icon={faServer} />}
            <p className="major__title">{title}</p>
            <p>{subjects}</p>
        </>
    );
}

