import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useOrder } from '../hooks/useOrder.js';
import { OrderContext } from '../context/OrderContext.js';

export default function PaymentSuccess() {
    const {getOrderList, saveToOrder} = useOrder();
    const {orderList} = useContext(OrderContext);
    const [searchParams] = useSearchParams(); // 서치 파람즈
    const pg_token = searchParams.get("pg_token");
    const [isRun, setIsRun] = useState(false)


    // pg_token && tid가 존재하면 shoppy_order 테이블에 주문내역을 insert, shoppy_cart는 delete
    // old(pk), pid, id, odate, total_price, tid, type, size, qty 등... shoppy컬럼에 들어가야하는 것들 

    // api에서 정해준 이름대로 해야 제대로 값이 넘어간다. 주의! 
    useEffect(()=>{ 
        const tid = localStorage.getItem("tid")
        tid && setIsRun(true)
        const fethOrderList = async()=>{
            const orderList = await getOrderList();
            console.log('fetchOrderList=>', orderList);
            
            if(orderList.length > 0){
                const totalPrice =  orderList.reduce((sum, item)=> sum + item.price * item.qty, 0)
                if(pg_token && tid){
                    // 1. axios를 통한 DB insert --> orderList, total_price
                    // 2. useOrder 커스텀 훅을 이용한 DB insert
                    saveToOrder(orderList, totalPrice, tid, "kakaopay")
                }
            }
        }
        if(isRun){fethOrderList();}
    }, [isRun])
        
    // console.log("total_price====>",
    // console.log("orderList======>", orderList);
    
    

    return (
        <div className='content'>
            {
                pg_token && 
                <h2>결제가 완료되었습니다.</h2> 
            } 
            {/* pg토큰... 즉 제대로 결제 됐을 때만 넘어오도록 해야한다.  */}
        </div>
    );
}

