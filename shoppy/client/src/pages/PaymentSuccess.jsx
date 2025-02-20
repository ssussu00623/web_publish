import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function PaymentSuccess() {
    const [searchParams] = useSearchParams(); // 서치 파람즈
    const pg_token = searchParams.get("pg_token");
    const tid = localStorage.getItem("tid")

    // pg_token && tid가 존재하면 shoppy_order 테이블에 주문내역을 insert, shoppy_cart는 delete
    // old(pk), pid, id, odate, total_price, tid, type, pname, qty

    // api에서 정해준 이름대로 해야 제대로 값이 넘어간다. 주의! 
    // useEffect(()=>{
    //     const approvePayment = async()=>{
    //     if(pg_token && tid){
    //         try {
    //             const response 
    //                 = await axios.post("http://http://localhost:3000/payment/approve", {pg_token, tid})
    //             console.log("결제 승인 완료:", response.data);
                
    //             } catch (error) {
                // console.log("결제 승인 실패", error);
                
    //         }
    //     }
    //     };
    //      approvePayment();
    // }, [pg_token, tid])
    console.log("pg_token", pg_token);
    console.log("tid", tid);
    
    

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

