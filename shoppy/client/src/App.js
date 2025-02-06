import React, { useState } from 'react';
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
  const [cartList, setcartList] = useState([]);
  /* 장바구니 상품 갯수 */
  const [cartCount, setCartCount] = useState(0);

  const addCart = (cartItem)=> {
    console.log('app.js====>', addCart);
    setcartList([...cartList, cartItem]); 
    // 기존에 있는 아이템 데이터를 유지하고자 한다면 스프레드 연산자를 사용하여야 한다.
    setCartCount(cartCount+1)
  }

  console.log('catrtList===>', cartList);
  console.log('catrtCartCaount===>', cartCount);
  
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
              <Route path='/cart' element={<Carts cartList={cartList}/>} />
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

{/* 여기 Route가 path를 관리하는 것 분산 관리...
element는 실제로 뜨는 페이지... 
레이아웃(헤더푸터)은 기본으로 뜨고 아울렛 부분에 엘리멘트가 관리하는 페이지가 뜬다.
레이아웃으로 관리하기 때문에 컴포넌트만(아울렛부분) 바뀌어서 속도가 빠름~*/}

{/*
  React hook. useEffect, useStates, useParams..중 파람으로 관리할 수 있게
  24라인의 pid는 변수값. 되도록 list에서 먼저 지정했던 값을 유지하는 것이 암묵적인 약속이다.
  상품마다 페이지를 늘리는 것보단 안의 정보값이 바뀌는 것이 효율적이므로.... 
  pid마다 값이 호출되도록..... path variable하게.*/}
