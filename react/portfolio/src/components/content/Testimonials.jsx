import React from 'react';
import Testimonial from './Testimonial';

export default function Testimonials() {
    const testimonialList =[
        {
            "img":"images/testimonials/people1.webp",
            "alt":"people1",
            "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name":"James Kim",
            "company":"Google"
        },
        {
            "img":"images/testimonials/people2.webp",
            "alt":"people2",
            "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name":"Smith Park",
            "company":"Samsung"
        },
        {
            "img":"images/testimonials/people3.webp",
            "alt":"people3",
            "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
            "name":"Anna Jin",
            "company":"Samsung"
        },
    ]
    return (
        <ul className="testimonials">
            {testimonialList&&testimonialList.map((testimonia)=>
            <li className="testimonial">
                <Testimonial 
                img={testimonia.img}
                alt={testimonia.alt}
                description={testimonia.description}
                name={testimonia.name}
                company={testimonia.company}
                />
            </li>
            )}
        </ul>
    );
}

