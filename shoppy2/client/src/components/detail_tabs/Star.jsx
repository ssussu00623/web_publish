import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

interface IstarProps {
    w:string;
    h:string;
    readonly : booleanp;
    ratr?: number;
}

export default function Star({w, h, readonly, rate}: IstarProps) {
    const [rating, setRating] = useState(rate || 0);
    const handleClickStar = (index : number) =>{
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

