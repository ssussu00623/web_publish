import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export default function Product(props) {
    // function handleCart(){} 이건 자주 사용하지 않지만 모듈로 만들 때 더 자주 사용함
    const handleCart = () => {
        // alert(`${props.id} 카트 클릭!!!`)
        props.totalCart(props.id); //prductList 컴포넌트 함수 호출 
    }

    return (
        <div className='product-contanier'>
            <div>
                <img src={props.img} alt={props.alt} />
                <div>
                    <FontAwesomeIcon 
                    className='cart' 
                    onClick={handleCart} 
                    icon={faCartShopping} />
                </div>
                {/* <button 
                type='button'
                onClick={handleCart}>[Cart]</button> */}
            </div>
            <p className='title'>{props.title}</p>
            <div className='description'>
                <p>{props.description}</p>
            </div>
            <div className='price'>
                <span className='sprice'>{props.price}</span>
                <span className='fprice'>{props.sale}</span>
            </div>
            <div className='tags'>
                {props.isSale && <span className='t1'>세일</span>}
                {props.isCupon &&<span className='t2'>쿠폰</span>}
                {props.isToday &&<span className='t3'>오늘드림</span>}
            </div>
        </div>

    );
}

