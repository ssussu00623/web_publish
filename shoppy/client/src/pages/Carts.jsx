import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/cart.css";
import { useCart } from "../hooks/useCart.js";
import { FaTrashCan } from "react-icons/fa6"; 

export default function Carts() {
    const { isLoggedIn} = useContext(AuthContext);
    const { cartList, setCartList, cartCount, totalPrice } = useContext(CartContext); 
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
                                <button onClick={()=>{updateCartList(item.qty>1 && updateCartList(item.cid, "decrease"))}}> 
                                
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
            {/* 주문버튼 출력 시작 */}
    {cartCount ? (
    <>
        <div className="cart-summary">
        <h3>주문 예상 금액</h3>
        <div className="cart-summary-sub">
            <p className="cart-total"><label>총 상품가격 :</label> <span>{totalPrice.toLocaleString()}원</span> </p>
            <p className="cart-total"> <label>총 할인 :</label> <span>-0원</span> </p>
            <p className="cart-total">  <label>총 배송비 :</label><span>+0원</span>{" "}</p>
        </div>
        <p className="cart-total2">
            <label>총 금액 :</label>
                <span>{totalPrice.toLocaleString()}원</span>
        </p>
        {/* <button className="checkout-btn">결제하기</button> */}
        </div>
        <div className="cart-actions">
        {/* <Link to="/checkout"> */}
            <button onClick={()=>{navigate("/checkout")}}>주문하기</button> 
            {/* <button onClick={navigate("/checkout")}>주문하기</button>  
                이렇게 콜백함수 형태가 아니고 그냥 호출하면 스킵하고 바로 navigate를 실행함... 콜백함수로 줄 것 ! 
            */}
            
        {/* </Link> */}
        </div>
    </>
    ) : (
    <div>
        <p>
        장바구니에 담은 상품이 없습니다. &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/all">상품보러 가기</Link> <br />
        <br />
        </p>
        <img
        src="https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCVFQyU5RSVBNSVFQiVCMCU5NCVFQSVCNSVBQyVFQiU4QiU4OHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        />
    </div>
    )}
    {/* 주문버튼 출력 종료 */}
        </div>
    );
}
