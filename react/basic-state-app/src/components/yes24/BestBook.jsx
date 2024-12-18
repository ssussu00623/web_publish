import React from 'react';
import { useState } from 'react';
import BestBookButton from './BestBooksButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';


export default function BestBook({list}) {
    const[totalQty, setTotalQty] =useState(0)

    const handleChangeQty = (qty) => {
        setTotalQty(totalQty+qty)
    }
    return (
        <>
        {list&&list.map((book, i)=>(
        <div style={{'display':'flex', 'marginBottom':'20px'}}>
        <BestBookAvatar 
            rank={i+1}
            img={book.img}
            />
        <BestBookContent
            suggest={book.suggest}
            today={book.today}
            nobel={book.nobel}
            type={book.type}
            title={book.title}
            autor={book.autor}
            company={book.company}
            pubDate={book.pubDate}
            price={book.price}
            perSale={book.perSale}
            point={book.point}
            />
        <BestBookButton qtyChange={handleChangeQty}/>

        </div>
        ))}
        </>
    );
}

{/* <div>전체수량: {totalQty}</div>
{bookList.map((item)=>
    <div style={{display:'flex'}}>
        <img src={item.img} alt={item.alt} width="100px"/>
    </div>
)} */}