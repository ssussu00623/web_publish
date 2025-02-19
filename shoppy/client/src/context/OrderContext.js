import { createContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [orderList, setOrderList] = useState([]); 
    const [orderPrice, setOrderPrice] = useState([]); 
    const [member, setMember] = useState({});
    // 여기에 들어간 데이터들은 유즈 훅에 들어가고 모든 데이터들은 자동으로 업데이트 되니 useState로 관리한다.

    return (
        <OrderContext.Provider value={{ orderList, setOrderList, orderPrice, setOrderPrice, member, setMember }}> 
            {children} 
        </OrderContext.Provider>
        // provider로 감싼 애들은 모두 value 정보를 받는다.  App.js에서 감싼 값들을 볼 수 있음 
    );
}
