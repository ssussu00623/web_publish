import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios"; 
import Qna from "../components/Product/qna/Qna.jsx";
import ReturnDelivery from "../components/Product/delivery/ReturnDelivery.jsx";
import DetailProductList from "../components/Product/productDetail/DetailProductList.jsx"
import Review from "../components/Product/review/Review.jsx";

export default function DetailProduct({ addCart }) {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("XS"); 
  
  useEffect(() => {
    axios
      .get("/data/product.json") // http://localhost:3000/data/product.json
      .then((res) => {
        res.data.filter((product) => {
          if (product.pid === pid) setProduct(product);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  //장바구니 추가 버튼 이벤트
  const addCartItem = () => {
    //장바구니 추가 항목 : { pid, size, count, price }
    // alert(`${pid} --> 장바구니 추가 완료!`);
    // console.log(product.pid, product.price, size, 1);
    const cartItem = {
      pid: product.pid,
      size: size,
      qty: 1,
      price: product.price,
    };
    addCart(cartItem); // App.js의 addCart 함수 호출
  };

  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.image} />
          <ul className="product-detail-image-top-list">
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
          </ul>
        </div>

        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
            product.price
          ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li>
            <p className="product-detail-box">신규회원, 무이자 할부 등</p>
          </li>
          <li className="flex">
            <label className="product-detail-label">사이즈 </label>
            <select
              className="product-detail-select2"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </li>
          <li className="flex">
            <button type="button" className="product-detail-button order">
              바로 구매
            </button>
            <button
              type="button"
              className="product-detail-button cart"
              onClick={addCartItem}
            >
              쇼핑백 담기
            </button>
            <div type="button" className="gift">
              <PiGiftThin />
              <div className="gift-span">선물하기</div>
            </div>
          </li>
          <li>
            <ul className="product-detail-summary-info">
              <li>상품 요약 정보</li>
            </ul>
          </li>
        </ul>
      </div>
      {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
            <div className="product-detail-tab">
                {/* start cont */}
                <div className="tab_content_area"> 
                    <DetailProductList/>
                    <Review />
                    <Qna />
                    <ReturnDelivery />
                </div>
                {/* end cont */}
            </div>
        </div>
  );
}
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // useParams 안에 pid가 있는 것.

// export default function DetailProduct({addCart}) {
    
//     const {pid} = useParams(); 
//     // {"pid":pid} 이런 형태로 들어있는 것과 마찬가지 구조분해할당으로 가져올 수 있다는 것
//     const[product, setProduct] =useState({});
//     const[size, setSize] = useState('XS');

//     useEffect(()=>{
//         axios.get('/data/product.json')  // http://localhost:3000/data/product.json
//             .then((res) => {
//                 res.data.filter((product)=>{
//                     if(product.pid === pid ) setProduct(product);
//                 });                
//             })
//             .catch((error)=> console.log(error));
//     }, []);
//     // 장바구니 추가 버튼 이벤트
//     // console.log(pid, product.price, size, 1);
//     const addCartItem= ()=>{
//         const cartItem = {
//             "pid":pid,
//             "name":product.name,
//             "size":size,
//             "qty":1,
//             "price":product.price
//         }
//         addCart(cartItem); //App.js의 addCart 함수 호출
//     }
//     /*
//     const addCartItem= ()=>{
//         // 장바구니 추가 항목 : { pid, size, count, price }
//         alert(`${pid}==> 장바구니 추가 완료!`);
//     }
//     // function addCartItem(){} 이렇게도 사용 가능하지만 리액트에서는 컴포넌트 생성에도 펑션을 사용하니,
//     // 변수를 지정하는 애로우 펑션을 사용한다.
//     */
    
//     return (
//         <div className='content'>
//             <div className='product-detail'>
//                 <img src={product.image} />
//                 <ul>
//                     <li className="product-detail-title">{product.name}</li>
//                     <li className="product-detail-title">{`${parseInt(product.price).toLocaleString()}원`}</li>
//                     {/* 요 부분 잘 확인해두기...MySQL이랑은 또 다름 */}
//                     <li className="product-detail-subtitle">{product.info}</li>
//                     <li>
//                         <span className='product-detail-select1'>옵션 : </span>
//                         <select className='product-detail-select2'
//                                 onChange={(e)=>setSize(e.target.value)}>
//                                 <option value="XS">XS</option>
//                                 <option value="S">S</option>
//                                 <option value="M">M</option>
//                                 <option value="L">L</option>
//                                 <option value="XL">XL</option>
//                         </select>
//                     </li>
//                     <li>
//                         <button type="button" 
//                                 className='product-detail-button'
//                                 onClick={addCartItem}>장바구니 추가</button>
//                     </li>
//                 </ul>
//             </div>
//     </div>
//     );
// }