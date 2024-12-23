import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

export default function ContentLink() {
    const contactList =[
        {
            "href":"http://github.com",
            "type":"github"
        },
        {
            "href":"http://linkedin.com",
            "type":"linkedin"
        },
    ]
    return (
        <ul className="contact__links">
            {contactList&&contactList.map((item)=>
            <li>
                <a className="contact__link" href={item.href}>
                {type === 'github' &&<FontAwesomeIcon icon={faGithub} />}
                {type === 'linkedin' &&<FontAwesomeIcon icon={faLinkedinIn} />}
                </a>
            </li>
            )}
        </ul>
    );
}

