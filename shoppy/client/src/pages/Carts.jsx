import React, { useContext, useEffect } from "react";
import "../styles/cart.css";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Carts() {
    const {isLoggedIn, setLoggedIn} = useContext(AuthContext);
    const {cartList, setCartList} = useContext(CartContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(isLoggedIn){
            //DB연동 로그인 id에 저장되어있는 카트 아이템 갯수 가져옴
            const id = localStorage.getItem("user_id");
            axios
            .post("http://localhost:9000/cart/items", {"id": id} )
            .then((res) => {
                console.log('list=>', res.data);
                setCartList(res.data);
            })
            .catch(error=> console.log(error));
        } else { // 로그아웃시 setCartCount 0으로 초기화
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?")
            if(select){
                navigate('/login')
            }
            setCartList(0); 
        }
    }, [isLoggedIn])

    console.log('cartList=====>', cartList);
    

    return (
        <div className="cart-container">
        <h2 className="cart-header"> 장바구니</h2>
        {
            cartList && cartList.map(item=> 
            <>
                <div className="cart-item" >
                    <img src={item.image} alt="" />
                    <div className="cart-item-details">
                        <p className="cart-item-title">{item.pname}</p>
                        <p className="cart-item-title">{item.size}</p> 
                        <p className="cart-item-price">
                        {item.price}원
                        </p>
                    </div>
                    <div className="cart-quantity">
                        <button >
                        -
                        </button>
                        <input type="text" value={item.qty} readOnly />
                        <button >
                        +
                        </button>
                    </div>
                    <button
                        className="cart-remove"
                        >
                        🗑
                    </button>
                    </div>  
                </>
            )
        }
                    <div className="cart-actions">                       
                        <button>주문하기</button>
                    </div>       
            </div> 
    );
    }
