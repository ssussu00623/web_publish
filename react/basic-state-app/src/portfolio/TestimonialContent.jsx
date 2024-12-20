import React from 'react';

export default function TestimonialContent(
    {img, alt, href, name, office, ment}) {
    return (
        <>
            <img className='testimonialImg'
                src={img}
                alt={alt}
            />
            <div className='testimonial__bubble'>
            <p>
                {ment}
            </p>
            <p className='testimonial__bubble__name'>
            <a href={href}>{name}</a>
            {office}
            </p>
            </div>
        </>
    );
}

