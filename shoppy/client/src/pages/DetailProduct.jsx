import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import Detail from "../components/detail_tabs/Detail.jsx"
import Review from "../components/detail_tabs/Review.jsx";
import ImageList from "../components/commons/ImageList.jsx";
import StarRating from "../components/commons/StarRating.jsx";
import axios from "axios";
import { CartContext } from "../context/CartContext.js";
import { AuthContext } from "../auth/AuthContext.js"; 
import {useCart} from '../hooks/useCart.js'

export default function DetailProduct() {
  const {saveToCartList, updateCartList} = useCart();
  //일반 함수가 아니니 주의
// export default function DetailProduct({ addCart }) { CartContext 쓰게 돼서 안 받아도 됨
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const { cartList } = useContext(CartContext);
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [imgList, setImgList] = useState([]);
  const [detailList, setDetailList] = useState([]);
  const [size, setSize] = useState("XS"); 
  const [tabName, setTabName] = useState('detail')
  const tabLabels = ['DETAIL', 'REVIEW', 'Q&A', 'RETURN & DELIVERY']
  const tabEventNames = ['detail', 'review', 'qna', 'return']
  
  useEffect(()=>{
    axios
    .post("http://localhost:9000/product/detail", {"pid": pid}) // http://localhost:3000/data/product.json
    .then((res) => {
      // console.log('res.data====>', res.data);  
      setProduct(res.data);
      //uploadFile 배열의 3개 이미지를 출력 형태로 생성하여 배열에 저장 MySQL 적용 전에 필요
      // const imgList = res.data.uploadFile.filter((image, i)=> (i<3) && image);
      setImgList(res.data.imgList)
      setDetailList(res.data.detailImgList);
    })
    .catch((error) => console.log(error));
  }, []);

  // console.log('imgList===>', imgList);
  

  /* json 으로 끌어왔던 방법
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
  */
  //장바구니 추가 버튼 이벤트
  const addCartItem = () => {
    //로그인 됐는지 안 됐는지 체크하기  AuthContext를 임포트하고 const 주기  
    if (isLoggedIn){
      //장바구니 추가 항목 : { pid, size, qty } 
      const cartItem = { pid: product.pid, size: size, qty: 1, };
      const findItem = cartList && cartList.find(item=> item.pid === product.pid 
        && item.size === size);
      // setCartCount(cartCount + 1); // 이제 바로 넣는게 아니라 DB연동이 필요! 
      // cartItem을 서버 전송하고 --> shoppy_cart에 추가(id 필요!) 

      // console.log('formData-->', formData);

      //0217
      // cartItem에 있는 pid, size를 cartList(로그인 성공시 준비)의 item과 비교해서 있다면 qty +1로 update 없다면 새로 추가.  
      // some 사용시 -> booldean타입
      // find 사용시 -> item요소 
      
      
      if(findItem !==undefined ){ //findItem이 undefind가 아니면 실행
        console.log('update========>');
        const result = updateCartList(findItem.cid);
        result && alert("장바구니에 추가되었습니다."); 
        
        // //qty+0 :: update===> cid
        // console.log('update');
        // const updateResult = axios
        // .put("http://localhost:9000/cart/updateQty", {"cid":findItem.cid} )
        // DB연동---> cartList 재호출 ! ! ! 
      //   .then(res => {
      //     // console.log('res.data=>', res.data) 
      //     if(res.data.result_rows){
      //       alert("장바구니에 추가되었습니다."); 
      //       const updateCartList = cartList.map((item)=>
      //         (item.cid === findItem.cid) ? 
      //           { 
      //             ...item, qty: item.qty+1 
      //           } : item 
      //       );
      //       setCartList(updateCartList);            
      //     }
      //   }
      // )
      //   .catch(error=> console.log(error));  
  // console.log(updateResult);
  
      } else {
        console.log('insert========>');
        const id = localStorage.getItem("user_id")
        const formData = {id: id, cartList:[cartItem]}; // item을 배열 돌려서...! 
        const result = saveToCartList(formData);
        result && alert("장바구니에 추가 되었습니다.")
        console.log("insert:: cartList==>", cartList);
        
      //   axios
      //   .post("http://localhost:9000/cart/add", formData )
      //   .then(res => {
      //     // console.log('res.data=>', res.data) 
      //     if(res.data.result_rows){
      //       alert("장바구니에 추가되었습니다.");
      //       // setCartCount(cartCount + 1); 
      //       // setCartList([...cartList, cartItem]);            
      //     }
      //   }
      // )
      //   .catch(error=> console.log(error));
        // DB연동---> cartList 재호출 ! ! ! 
      } 
  }
    // else {
    //   const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
    //   if(select){
    //     navigate('/login');
    //   }
    // }
    // addCart(cartItem); // App.js의 addCart 함수 호출 + provider사용하게 돼서 없어도 됨. 
  };
  // console.log('cartCount==>', cartCount); 

  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={`${product.image}`} />
          <ImageList className="product-detail-image-top-list"
                      imgList={imgList}/>
        </div> {/* end - product-detail-image-top */}
        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
              product.price
            ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li className="product-detail-subtitle-star">
            <StarRating totalRate={4.2} className="star-coral"/> <span>572개 리뷰 &nbsp;&nbsp; {">"}</span>
          </li>
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
            </div> {/* end - buttons */}
          </li>
          <li>
            <ul className="product-detail-summary-info">
              <li>상품 요약 정보</li>
            </ul>
          </li>
        </ul>
      </div> {/* end - product-detail-top */}
      <div className="product-detail-tab"> 
        <ul className="tabs">
          {
            tabLabels.map((label, i) => 
                <li className={tabName === tabEventNames[i] ? "active": ''}>
                  <button type="button" onClick={(e)=> setTabName(tabEventNames[i])}>{ label }</button>
                </li>
          )
        }
      </ul> 
      <div className="tabs_contents">
          { tabName === "detail" && <Detail imgList={detailList} /> }
          { tabName === "review" && <Review /> }
        </div> {/* end - tabs_contents */}
      </div> {/* end - product-detail-tab */}
</div>   // end - content
  );
  {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY 
        <div className="product-detail-tab"> 
            <div className="tab_content_area"> 
                <DetailProductList/>
                <Review />
                <Qna />
                <ReturnDelivery />
            </div> 
        </div>
    </div>
);
} */}
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