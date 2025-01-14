import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './page/Layout.jsx';
import Home from './page/Home.jsx';
import Products from './page/Products.jsx';
import Carts from './page/Carts.jsx';
import Login from './page/Login.jsx';
import Signup from './page/Signup.jsx';

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/all' element={<Products />} />
          <Route path='/cart' element={<Carts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
  </BrowserRouter>
  </div>
);
}
