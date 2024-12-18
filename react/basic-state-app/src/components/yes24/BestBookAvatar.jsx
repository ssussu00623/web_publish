import React from 'react';

export default function BestBookAvatar({rank, img, alt}) {
    return (
        <div className='container-avatar'>
            <p>{rank}</p>
            <img src={img} alt={alt} />

        </div>
    );
}

