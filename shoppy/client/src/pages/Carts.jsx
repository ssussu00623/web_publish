import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart.js";
import { FaTrashCan } from "react-icons/fa6";

export default function Carts() {
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList} = useContext(CartContext); 
    const navigate = useNavigate();
    const { getCartList, updateCartList, deleteCartItem } = useCart();
    const hasCheckedLogin = useRef(false);
    useEffect(() => {
        if (hasCheckedLogin.current) return; // true : 로그인 상태 --> 알림창 없이 바로 블록을 빠져나와 카트 블록을 보여주는 return.
        hasCheckedLogin.current = true;  // 알림창을 한 번 띄우고 true상태로 반환

        if (isLoggedIn) {
            //DB연동 로그인 id에 저장되어있는 카트 아이템 갯수 가져옴 
            getCartList();
        } else { // 로그아웃시 setCartCount 0으로 초기화 
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?")
            select ? navigate('/login') : navigate('/');
            setCartList([]);
        }
    }, [isLoggedIn]);

    // console.log('cartList=====>', cartList);
    // 수량 업데이트 
    // const handleQtyUpdate =(cid, type)=>{
    //     updateCartList(cid, type)
    // }


    return (
        <div className="cart-container">
            <h2 className="cart-header"> 장바구니</h2>
            {
                cartList && cartList.map(item =>
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
                                <button onClick={()=>{updateCartList(item.cid, "decrease")}}> 
                                    {/* 콜백함수 형식이 아니면 무한 루프..... 주의 */}
                                    -
                                </button>
                                <input type="text" value={item.qty} readOnly />
                                <button onClick={()=>{updateCartList(item.cid, "increase")}}>
                                    +
                                </button>
                            </div>
                            <button
                                className="cart-remove"
                                onClick={()=>{deleteCartItem(item.cid)}}
                            >
                                <FaTrashCan />
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
