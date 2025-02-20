// context를 만들면 hook도 만든다고 생각하면 된다. use꼭 붙여야함 유의! ! ! 
import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext.js';
import axios from 'axios';

export function useOrder() {
    const {orderList, setOrderList, orderPrice, setOrderPrice, member, setMember}= useContext(OrderContext);
    //OrderContextd에서 오브젝트리터럴로 밸류값을 주기 때문에 여기서도 {}로 받는다.
    //userContext로 관리되는 객체덜의 CRUD 함수 정의
    // 전체 주문정보 가져오기 : getOrderList
    const getOrderList = async()=>{
        const id = localStorage.getItem("user_id")
        const result = await axios.post("http://localhost:9000/order/all", {"id": id})
        setOrderList(result.data)
        setMember(result.data[0])
        console.log('orderList==>', result.data); 

        return result.data;
    }

    const saveToOrder = async(orderList, totalPrice, tid, type)=>{
        console.log("saveToOrderorderList===>", orderList);
        console.log("saveToOrdertotalPrice==>", totalPrice);
        const id = localStorage.getItem("user_id") 
        const formData = {
            "id": id,
            "tid":tid,
            "type":type,
            "totalPrice":totalPrice,
            "orderList":orderList
        }
        const result = await axios.post("http://localhost:9000/order/add", formData)
        
        
        setOrderList(result.data)
        setMember(result.data[0])
        console.log('orderList==>', result.data); 
    }

    return { getOrderList, saveToOrder}
};

