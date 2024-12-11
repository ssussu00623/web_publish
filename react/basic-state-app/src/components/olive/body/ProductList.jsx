import React, { useEffect, useState } from 'react';
import Product from './Product';


export default function ProductList({cart}) {
    const [productList, setProductList] = useState([])
    
    useEffect(()=>{
        fetch("/data/olive.json")
            .then(data => data.json())
            .then(jsonData=> setProductList(jsonData))
            .catch()
    }, [])
    const totalCart=(id)=>{
        // alert(`productList- ${id}:::카트 클릭!!!`)
        cart(id);
        // 여기서 AppOlive의 handleCartApp 함수 호출
    }

    
    return (
        <ul className='Product-list-container'>
            {productList.map((item)=>
            <li> <Product 
                totalCart={totalCart}
                id={item.id}
                img ={item.img}
                alt ={item.alt}
                title ={item.title}
                description ={item.description}
                price ={item.price}
                sale ={item.sale}
                isSale ={item.isSale}
                isCupon ={item.isCupon}
                isToday ={item.isToday}
            /> </li> 
        )}
    </ul>
    );
}

