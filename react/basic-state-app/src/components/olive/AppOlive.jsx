import React from 'react';
import Header from './Header.jsx'
import Body from './Body.jsx';
import MenuList from './header/MenuList.jsx';
import { useState } from 'react';
import './Olive.css'
import ProductList from './body/ProductList.jsx';

export default function AppOlive() {
    // const handleCartApp=(id)=>{
    // 그냥 이렇게만 하면 지역변수라서 이 밖으로 나갈 수가 없다... 리액트가 관리하도록 넘겨줘야함
    const[id, setId] = useState('');
    // 배열에 id저장 ---> 배열의 길이도 저장---> cartCount
    // 그러려면? 리액트가 관리하도록 배열을 새로 만들어줘야함
    const[cartList, setCartList] = useState([]);
    const list = []
    //이 안에 데이터를 넣으려면 객체를 풀어서 넣어야함... 
    const handleCartApp=(id)=>{
        // setId(id);
        setCartList([...cartList, id]);
        // cartList.push(id); <- 이것도 가능하지만 useState를 사용하는 리액트가 권장하진 않음 !
        {/* cartList.push(id)는 객체를 에세스 해서 붙이는 것이고 
            setCartList는 cartList를 보는 것이기 때문에 id를 붙이는게 아니라 cartList.push가 붙거나 
            [...cartList, id]를 붙여 객체를 다 나열한 상태에서 id값을 붙일 수 있도록 활용하는 것이 좋음 
            이렇게 사용하는 경우 id값을 따로 useState로 관리할 필요가 없어서
            setId(id);는 주석처리하여 사용한다.
            */}
    }

    console.log(`cartList--->${cartList}`);
    

    return (
        <div>
            <Header>
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png"></img>
                <MenuList count={cartList.length}/>
            </Header>
            <Body>
                <ProductList cart= {handleCartApp}/>
                {/* 여기서 카트 값을 cart라는 이름으로 받아 */}
            </Body>
        </div>
    );
}

