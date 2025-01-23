import React from 'react'; 
import ProductList from './ProductList';

export default function Home() {
    return (
        <div>
        <div className='content'>
            <div className='banner'>
                <h3>Shop with US</h3>
                <p>Best Products, High Quality</p>
            </div>
            <ProductList />
        </div>
        </div>
    );
}

