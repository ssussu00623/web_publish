import React from 'react';

export default function Testimonial({img, alt, description, name, company}) {
    return (
        <>
            <img class="testimonial__img" 
            src={img}
            alt={alt} />
            <div class="testimonial__bubble">
                <p>{description}</p>
                <p><a href="#" class="testimonial__bubble__name">{name}</a> / {company}</p>
            </div>
        </>
    );
}

