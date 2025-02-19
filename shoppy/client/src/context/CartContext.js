import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]); // 여기에 들어간 데이터들은 유즈 훅에 들어가고 모든 데이터들은 자동으로 업데이트 되니 useState로 관리한다.
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    return (
        <CartContext.Provider value={{ cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice }}> 
            {children} 
        </CartContext.Provider>
        // provider로 감싼 애들은 모두 value 정보를 받는다.  App.js에서 감싼 값들을 볼 수 있음 
    );
}
