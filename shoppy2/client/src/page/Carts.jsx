import React from 'react';

export default function Carts({cartList}) {
    return (
        <div className='content'>
            <h1>cart!</h1>
            <table border="1">
                <tr>
                    <th>pid</th>
                    <th>name</th>
                    <th>size</th>
                    <th>price</th>
                </tr>
                    {cartList.map((cartItem)=>
                        <tr>
                            <td>{cartItem.pid}</td>
                            <td>{cartItem.name}</td>
                            <td>{cartItem.size}</td>
                            <td>{cartItem.price}</td>
                        </tr>
                    )}
            </table>
        </div>
    );
}

