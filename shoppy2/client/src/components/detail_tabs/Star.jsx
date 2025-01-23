import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';


export default function Star({w, h, readonly, rate}) {
    const [rating, setRating] = useState(rate || 0);
    const handleClickStar = (index) =>{
        if(readonly){
            setRating(index + 1);
        }
    };

    return (
        <div>
            {Array.from({ length : 5}).map((_, index)=>( 
                    <div className={`relative ${w} ${h} cusor-pointer`}
                    key={index}
                    > 
            <FaStar 
            onClick={()=> handleClickStar(index)}
            className={`${w} ${h} ${!readonly && rating >= index + 1 ? 'text-primary-review' : 'text-gray200'}`}            
            />
            </div>
        ))}
        </div>
    );
}

