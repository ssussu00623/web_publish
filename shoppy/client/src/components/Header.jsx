import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext.js';

export default function Header({cartCount}) {
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggdIn} = useContext(AuthContext);
    // console.log('isLoggedIn===>', isLoggedIn);
    const handleLoginToggle=()=>{
        if(isLoggedIn){ // 로그인이 성공 했을 때. 로그드인이 트루이니까 
            const select = window.confirm("정말로 로그아웃 하시겠습니까?");
            if(select){
                localStorage.removeItem("token")
                setIsLoggdIn(false);
                navigate('/')
            } 
            // alert("로그아웃 되었습니다.")
            
        } else {
            navigate('/login')
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
                    <button type="button" onClick={handleLoginToggle}>
                        {isLoggedIn ? "Logout": "Login"}
                    </button> 
                    <Link to='/signup'>
                        <button type="button">Signup</button>
                    </Link>
                    
                </nav>
            </div>
        </div>
    );
}