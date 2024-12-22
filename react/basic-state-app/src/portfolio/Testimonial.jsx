import React from 'react';
import TestimonialContentList from './TestimonialContentList';

export default function Testimonial() {
    return (
          <div className='testimonials'>
            <section id="testimonial" className="section max-container">
            <h2 className="title">Testimonial</h2>
            <p className="description">See what they say about me</p>

                <TestimonialContentList />

          </section>
          </div>
    );
}
 
