import React from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
    return (
        <div className='content'>
            <div className='banner'>
                <h3>Shop with us</h3>
                <p>Best Product, High Quality</p>
            </div>
            <a href="http://localhost:9000/hello">서버테스트</a>
            <ProductList />
        </div>
    );
}



