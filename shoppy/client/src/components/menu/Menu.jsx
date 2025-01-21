import React from 'react';

export default function Menu({href, className, name}) {
    return (
        <a href={href} className={className}>{name}</a>
    );
}

