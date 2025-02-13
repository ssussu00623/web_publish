import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import NewProduct from './pages/NewProduct.jsx'
import { AuthProvider } from './auth/AuthContext.js';



export default function App() {
  /* 장바구니 리스트: 배열 */
  // const [cartList, setcartList] = useState([]);
  // 장바구니 상품 갯수 담는 이벤트가 발생했을 때 자동으로 관리하게 스테이트를 붙였다. 헤더로 넘어간다.
  // 새로고침하면 초기화 된다!  수정해주기.
  const [cartList, setCartList] = useState(()=>{
    try { 
      const lnitCartList = localStorage.getItem("cartItems");
      return lnitCartList ? JSON.parse(lnitCartList) : [];
      // 가져온 제이슨 데이터가 있다면 출력하고 없다면 빈 값을 리턴한다.
    } catch (error) {
      console.log('로컬스토리지 데이터 작업 도중 에러 발생');
      console.log(error);
    }
  });
  const [cartCount, setCartCount] = useState(()=>{
    try {
      // JSON.parse(localStorage.getItem("cartItems")).length;
      //권장하지 않음... 로컬에 다녀와, json으로 바꿔, 길이 구해...
      //짧지만 3가지의 기능을 구하고 있어서.
      const lnitCartList = localStorage.getItem("cartItems");
      return lnitCartList? JSON.parse(lnitCartList).length : 0;
    } catch (error) {
      console.log('로컬스토리지 데이터 작업 도중 에러 발생');
      console.log(error);
    }
  });
  
  // cartCount가 업데이트 되면 localStorage에 cartList를 저장 useState가 종료되면 실행되도록 한다. 
  // useEffect (()=>{},[cartCount]) 카트 카운트가 업데이트 되면 이 함수를 매번마다 실행한다.
  useEffect (()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartList)); // 카트카운트가 0이 아닐 때 실행되도록 한다. 받은 배열을 문자로...  
  },[cartList])

  /* 장바구니 추가 */
  const addCart = (cartItem) => {
    const isCheck =  cartList.some(checkItem => checkItem.pid === cartItem.pid && 
                                                checkItem.size === cartItem.size);  
    let updateCartList = [];
    if(isCheck) {
      updateCartList =  cartList.map(item => 
            item.pid === cartItem.pid && item.size === cartItem.size ?
              {...item, qty:item.qty+1 } 
            : item        
            ) 
    } else {
      updateCartList = [...cartList, cartItem];
      setCartCount(cartCount + 1);  
    }                      
    // const sortUpdateCartList = updateCartList.sort((a, b) => a.pid - b.pid);                
    setCartList(updateCartList);
  } //addCart  
  // console.log('catrtList===>', cartList);
  // console.log('catrtCartCaount===>', cartCount);
  // 넘어온 걸 저장(순서 2)
  
  /*
  const addCart = (cartItem)=> {
    console.log('app.js====>', cartItem);
    // App.js가 DetailProduct의 부모이기 때문에 이렇게 가져오는 것이 가능. 
    // 넘어온 정보(순서1)
  }
    */
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout cartCount={cartCount}/>}>
              <Route index element={<Home />} />
              <Route path='/all' element={<Products />} />
              {/* <Route path='/cart' element={<Carts cartList={cartList}/>} /> 
                이제 로컬스토리지에 올려두기 때문에 cartList가 필요하지 않음*/}
              <Route path='/cart' element={<Carts />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/products/:pid' element={<DetailProduct addCart={addCart}/>} />
              <Route path='/products/new' element={<NewProduct/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

// {/* 여기 Route가 path를 관리하는 것 분산 관리...
// element는 실제로 뜨는 페이지... 
// 레이아웃(헤더푸터)은 기본으로 뜨고 아울렛 부분에 엘리멘트가 관리하는 페이지가 뜬다.
// 레이아웃으로 관리하기 때문에 컴포넌트만(아울렛부분) 바뀌어서 속도가 빠름~*/}

// {/*
//   React hook. useEffect, useStates, useParams..중 파람으로 관리할 수 있게
//   24라인의 pid는 변수값. 되도록 list에서 먼저 지정했던 값을 유지하는 것이 암묵적인 약속이다.
//   상품마다 페이지를 늘리는 것보단 안의 정보값이 바뀌는 것이 효율적이므로.... 
//   pid마다 값이 호출되도록..... path variable하게.*/}
