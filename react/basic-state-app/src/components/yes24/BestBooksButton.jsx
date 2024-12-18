import React, { useState } from 'react';

export default function BestBooksButton({qtyChange}) {
    const [qty, setQty] = useState(1);
    const handleClick = (type) =>{
        if(type === '-'){
            (qty > 1 )? setQty(qty-1) : alert('최소 주문은 1권 이상입니다.'); 
        } else if(type === '+'){
            (qty < 30 )? setQty(qty+1) : alert('31권 이상은 문의 바랍니다..')
        }
    }
    return (
        <div>
        <ul className='container-button'>
            <li>
                <input type="checkbox" />
                <button type='button' onClick={()=>{handleClick('-')}}>-</button>
                <span>{qty}</span>
                <button type='button' onClick={()=>{handleClick('+')}}>+</button>
            </li>
            <li><button type='button' onClick={()=>{qtyChange(qty)}}>카트에 넣기</button></li>
            <li><button type='button'>바로구매</button></li>
            <li><button type='button'>리스트에 넣기</button></li>
        </ul>
        </div>
    );
}

