import React, { useEffect, useState } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';

export default function ProductList() {
    const[list, setList] = useState([]);
    useEffect(()=>{
        axios.get('data/product.json')
            .then((res)=>setList(res.data))
            .catch((error)=> console.log(error));
    }, []);
    const rows = [];
    for(let i=0; i<list.length; i+=3){
        rows.push(list.slice(i, i+3));
    }
    console.log(rows);
    
    return (
        <div>
            {rows.map((rowArray)=>
                <div className='product-list'>
                    {rowArray.map((product)=>
                        <ProductAvata 
                            img={product.img}/>
                    )}
                </div>
            )}
        </div>
    );
}

