import React, { useContext, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext.js';
import { CartContext } from '../context/CartContext.js';
import { useCart } from '../hooks/useCart.js';

export default function Header() {
    // export default function Header({cartCount}) {
    const { cartCount, cartList } = useContext(CartContext);
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { getCount, setCount } = useCart();
    const navigate = useNavigate();

    //로그인 상태에 따라 cartCount 값 변경
    useEffect(() => {
        isLoggedIn? getCount() : setCount(0); 
    }, [isLoggedIn])  

    const handleLoginToggle = () => {
        if (isLoggedIn) {  // Logout 버튼 클릭!!!
            const select = window.confirm("정말로 로그아웃 하시겠습니까?");
            if (select) {
                localStorage.removeItem("token");
                localStorage.removeItem("user_id");
                setIsLoggedIn(false);
                navigate('/');
            }
        } else {  // Login 버튼 클릭
            navigate('/login');
        }
    }


    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>MyCart({cartCount})</Link>
                    {/* 이름은 같지만 실행 방식이 달라진 cartCount */}
                    <button type="button" onClick={handleLoginToggle}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                    <Link to='/signup'>
                        <button type="button">Signup</button>
                    </Link> 
                    {isLoggedIn &&
                        <Link to='/products/new'>
                            <button type="button">New Product</button>
                        </Link>
                    } 
                </nav>
            </div>
        </div>
    );
}
