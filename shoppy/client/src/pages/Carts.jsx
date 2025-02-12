import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Carts() {
    //localStorage에 담긴 cartItems의 배열 객체 출력
    // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    // ㄴ 출력되는 값에 qty, size등의 텍스트 값을 더해 출력시키기 위해 useState가 관리할 수 있게 한다. 
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));
    // console.log('cartItems====>', cartItems[0].pid);
    //pids 배열 생성 cartItems의 pid값을 pids배열에 추가 
    

    // const pids = [];
    // cartItems && cartItems.map(item=> pids.push(item.pid));
    
    // 실행하면 새로운 []배열이 나온다 이 배열 안에 값이 들어갈 수 있게 해주기. 
    const pids = cartItems && cartItems.map(item=> item.pid);
    console.log('pids===>', pids);
    
    
    useEffect(()=>{
        if(pids.length > 0) {// pids의 값 길이가 0보다 클 때 실행 된다.
        //axios()를 사용하여 DB연동 
        axios // 리액트가 관리하는 상태가 아니기 때문에 계속 네트워크 요청을 하여 반복문이 계속 돌게 된다. useEffect가 관리하여 실행에 제한을 줘야함 
            .post("http://localhost:9000/product/cartitems", {"pids" : pids}) // db로넘어갈 때는 json으로 넘어가야하니 {} 꼭 주의
            .then(res=> {
                // console.log(res.data)  
                const updateCartItems =
                cartItems.map((item, i)=> 
                    item.pid === res.data[i].pid 
                // ?
                && 
                        {...item, 
                        "pname":res.data[i].pname, 
                        "price":res.data[i].price,
                        "description" : res.data[i].description,
                        "image" : res.data[i].image
                    } 
                // : item); 이미지가 안 뜨는 오류 이슈로... 삼항 연상자가 아니라 조건으로 변경...했으나? 여전히 오류
                );
                setCartItems(updateCartItems);
            })
                //cartItems에 res.data를 더해 출력하기. [{pid,size, qty, pname, price,description,image}] 이렇게 출력된다. 
            .catch(error=> console.log(error));
        }
    }, []); //cartItems가 바뀌면 db 연동을 실행 
    console.log('cartItems==>',cartItems); 


    return (
        <div className="content">
            <h1>MyCart!!</h1>
            <table border="1">
                <tr>
                    <th>PID</th>
                    <th>PNAME</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>description</th>
                    <th>Price</th>
                    <th>Img</th>
                </tr>
                {
                    cartItems && cartItems.map((item)=> 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{
                                <img src={item.image} alt='' style={{width:"100px"}} />
                                }</td>
                        </tr>
                        )
                }
            </table>
        </div>
    );
}
