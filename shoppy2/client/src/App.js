import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './page/Layout.jsx';
import Home from './page/Home.jsx';
import Products from './page/Products.jsx';
import Carts from './page/Carts.jsx';
import Login from './page/Login.jsx';
import Signup from './page/Signup.jsx';
import DetailProduct from './page/DetailProduct.jsx';

export default function App() {
  // 장바구니 리스트
  const [cartList,setcartList] = useState([]);
    // 장바구니 상품 갯수
    const [cartCount, setCartCount] = useState(0);
  const addCart = (cartItem)=>{
    console.log('app====>js', addCart);
    setcartList([...cartList, cartItem])
    setCartCount(cartCount+1)
  }

  console.log('catrtList===>', cartList);
  console.log('catrtCartCaount===>', cartCount);

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout cartCount={cartCount}/>}>
          <Route index element={<Home />} />
          <Route path='/all' element={<Products />} />
          <Route path='/cart' element={<Carts cartList={cartList} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product/:pid' element={<DetailProduct addCart={addCart}/> } />
        </Route>
      </Routes>
  </BrowserRouter>
  </div>
);
}
