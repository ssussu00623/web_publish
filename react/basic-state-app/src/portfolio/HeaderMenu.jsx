import React from 'react';

export default function HeaderMenu({href, name, className}) {
    return (
            <a  href={href}
            className={className}>{name}</a>  
    );
}

