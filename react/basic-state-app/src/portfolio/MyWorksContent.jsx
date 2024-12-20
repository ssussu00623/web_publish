import React from 'react';

export default function MyWorksContent(
    {className, img, alt, divClassName, h3ClassName, name, etc}) {
    return (
        <div className={className}>
            <img src={img} alt={alt} />
            <div className={divClassName}>
                <h3 className={h3ClassName}>{name}</h3>
                <p>{etc}</p>
            </div>
        </div>
    );
}
