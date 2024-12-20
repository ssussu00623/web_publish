import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faMobile, faServer} from '@fortawesome/free-solid-svg-icons'
export default function AboutMeBox({icon, title, skill}) {
    return (
        <div>
                <FontAwesomeIcon 
                    icon={{icon}}/>
                <p className="major__title">{title}</p>
                <p>{skill}</p>
        </div>
    );
}

