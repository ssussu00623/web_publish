import React, { useEffect, useState } from 'react';
import TestimonialContent from './TestimonialContent';

export default function TestimonialContentList() {
    const [testimonialList, SetTestimonialList]=useState([]);
    useEffect(()=> {
        fetch("/data/portfolio.json")
        .then(data=> data.json()) 
        .then(jsonData =>
            SetTestimonialList(jsonData.testimonialList)
        )
    }, [])
    return (
        <>
                {testimonialList&&testimonialList.map((item)=>
                    <li className='testimonial'>
                        <TestimonialContent 
                            img={item.img}
                            alt={item.alt}
                            href={item.href}
                            ment={item.ment}
                            name={item.name}
                            office={item.office}
                            />
                    </li>
                )}
                </>
    );
}
