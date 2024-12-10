import React from 'react';
import { useState } from 'react';
import BestBookButton from './BestBooksButton';

export default function BestBook() {
    const[totalQty, setTotalQty] =useState(0)
    const list = [
        {"img": "https://image.yes24.com/goods/13137546/L",
        "alt": "한강, 소년이 온다."},
        {"img": "https://image.yes24.com/goods/108422348/L", 
        "alt": "한강, 채식주의자"},
        {"img": "https://image.yes24.com/goods/103495056/L", 
        "alt":"한강, 작별하지 않는다"}
    ];

    const handleChangeQty = (qty) => {
        setTotalQty(totalQty+qty)
    }
    return (
        <>
        <div>전체수량: {totalQty}</div>
        {list.map((item)=>
            <div style={{display:'flex'}}>
                <img src={item.img} alt={item.alt} width="100px"/>
                <BestBookButton qtyChange={handleChangeQty}/>
            </div>
        )}
        </>
    );
}

