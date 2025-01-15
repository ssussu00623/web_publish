import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function DetailProduct({addCart}) {
    const{pid} = useParams();
    const [product, setProduct] = useState({});
    const [size, setSize] = useState('XS')

    useEffect(()=>{
        axios.get('/data/product.json')
        .then((res)=>{
            res.data.filter((product)=>{
                if(product.pid === pid) setProduct(product);
            });
        })
        .catch((error)=>{console.log(error)});
    }, []);

    const addCartItem=()=>{
        const cartItem = {
            "pid":pid,
            "name":product.name,
            "size":size,
            "qty":1,
            "price":product.price
        }
        addCart(cartItem);
    }

    return (
        <div className='content'>
            <div className='product-detail'>
                <img src={product.image} />
                <ul>
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">{`${parseInt(product.price).toLocaleString()}원`}</li>
                    {/* 요 부분 잘 확인해두기...MySQL이랑은 또 다름 */}
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li>
                        <span className='product-detail-select1'>옵션 : </span>
                        <select className='product-detail-select2'
                                onChange={(e)=>setSize(e.target.value)}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                        </select>
                    </li>
                    <li>
                        <button type="button" 
                                className='product-detail-button'
                                onClick={addCartItem}>장바구니 추가</button>
                    </li>
                </ul>
            </div>
    </div>
    );
}

