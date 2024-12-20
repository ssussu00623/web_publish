import React from 'react';


export default function MyWorkButton({name, count}) {
    const handleClickButton=()=>{
        click(category)
    }
    return (
            <li>
                <button 
                    className="category category--selected" 
                    name="type" 
                    onClick={handleClickButton}
                >
                    {name}
                    <span className="category__count">{count}</span>
                </button></li>
    );
}
