import React from 'react';

export default function TestimonialContent(img, alt,href, name, office) {
    return (
        <div>
            <img
                src={img}
                alt={alt}
            />
            <p>
                <a href={href}>{name}</a>
                {office}
            </p>
        </div>
    );
}

