import axios from 'axios';
import React, { useEffect, useState, useContext} from 'react';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from "react-router-dom";

export default function Carts({refreshStorage}) {
    const navigate = useNavigate();
    //로그인 여부 체크
    const {isLoggedIn, setIsLoggdIn} =  useContext(AuthContext); 
    
    // 장바구니 저장 
    //localStorage에 담긴 cartItems의 배열 객체 출력
    // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    // ㄴ 출력되는 값에 qty, size등의 텍스트 값을 더해 출력시키기 위해 useState가 관리할 수 있게 한다. 
    const [cartList, setCartList] = useState(()=>{
        try { 
            const lnitCartList = localStorage.getItem("cartItems");
            return lnitCartList ? JSON.parse(lnitCartList) : [];
          // 가져온 제이슨 데이터가 있다면 출력하고 없다면 빈 값을 리턴한다.
        } catch (error) {
            console.log('로컬스토리지 데이터 작업 도중 에러 발생');
            return [];
        }
    }); 
    // console.log('cartItems====>', cartItems[0].pid);
    //pids 배열 생성 cartItems의 pid값을 pids배열에 추가 
    

    // const pids = [];
    // cartItems && cartItems.map(item=> pids.push(item.pid));
    
    // 실행하면 새로운 []배열이 나온다 이 배열 안에 값이 들어갈 수 있게 해주기. 
    const pids = cartList && cartList.map(item=> item.pid);

    // console.log('pids===>', pids);
    
    
    useEffect(()=>{
        if(pids.length > 0) {// pids의 값 길이가 0보다 클 때 실행 된다.
        //axios()를 사용하여 DB연동 
        axios // 리액트가 관리하는 상태가 아니기 때문에 계속 네트워크 요청을 하여 반복문이 계속 돌게 된다. useEffect가 관리하여 실행에 제한을 줘야함 
            .post("http://localhost:9000/product/cartitems", {"pids" : pids}) // db로넘어갈 때는 json으로 넘어가야하니 {} 꼭 주의
            .then(res=> {
                // console.log(res.data)  
                const updateCartList = cartList.map((item, i)=> {
                    const filterItem = res.data.find((ritem)=> ritem.pid === item.pid)
                    return filterItem ? 
                        {
                        ...item, 
                        "pname":filterItem.pname, 
                        "price":filterItem.price,
                        "description" : filterItem.description,
                        "image" : filterItem.image
                        } 
                : item //이미지가 안 뜨는 오류 이슈로... 삼항 연상자가 아니라 조건으로 변경...했으나? 여전히 오류
            });
            setCartList(updateCartList);
                //cartItems에 res.data를 더해 출력하기. [{pid,size, qty, pname, price,description,image}] 이렇게 출력된다. 
        })
            .catch(error=> console.log(error));
        }
    }, [cartList]); //cartItems가 바뀌면 db 연동을 실행 
    // console.log('cartItems==>',cartList); 

    // 주문하기 이벤트
    const handleOrder=(type, pid, size)=>{ // 전체주문인지 담아두기인지 type을 확인하고 이벤트 진행 
        // console.log(type, pid, size);
        
        // 1. 로그인 여부 체크 
        // console.log('isLoggdIn===>', isLoggedIn); true일때 로그인상태
        if(isLoggedIn){
        // 로그인==> DB연동 후 저장
        // {"id":"test123", "cartList":[~~~~]}
            console.log('isLoggdIn===>', isLoggedIn);
            const id = localStorage.getItem("user_Id");
            // const formData = {"id" : id, "cartList" : cartList} // 전체 구매만 있었을 때는 const도 가능했지만 개별 담아두기 기능 추가로 주석
            let formData = [];
            if(type === "all"){ // 전체 주문하기 눌렀을 때. 
                formData = {"id" : id, "cartList" : cartList}
            } else {
                const filterItem = cartList.filter(item => item.pid === pid && item.size === size);
                formData = {"id": id, cartList: filterItem}
            } 
            console.log('formData===>', formData);
            
            axios
                // .post("http://localhost:9000/cart/add", {"pid":formData, "cartList":cartList})
                .post("http://localhost:9000/cart/add", formData)  // cosnt formData했으니 formData로 줘야함!!!! 주의.
                .then(res=> {
                    // console.log(res.data) 정보확인한 값
                    if(res.data.result_rows){
                        alert ("장바구니에 추가되었습니다.")
                        if(type === "all"){
                            // 로컬스토리지 아이템 전체 삭제
                            // localStorage.removeItem("cartItems")
                            // setCartList([]); // 비동기식 로직이기 때문에 이렇게 할 일을 묶어주지 않고 놔두면 캐시가 남거나 이걸 놓치는 경우가 생길 수 있음...
                            clearStorageAll(); 
                            // App.js cartList, cartCout 초기화(하기 전까지 계속... 데이터가 돌고 잔여 데이터가 남아있음)
                            refreshStorage([], 0); //<- 초기화하여 0으로 
                        } else {
                            // 로컬스토리지 아이템 개별 삭제 
                            const updateCart = clearStorageEach(pid, size);
                            refreshStorage(updateCart, updateCart.length); // 사라진 length에 맞춰...
                        }
                    }
                })
                .catch(error=> console.log(error))
        }else {
            // 로그아웃==> 로그인 창으로 ==> 로그인 ==> DB연동 후 저장 
            // alert('로그인이 필요한 서비스입니다.');
            // navigate('/login'); 아래는 윈도우 버전으로 
            const select = window.confirm("로그인이 필요한 서비스입니다.")
            if(select) navigate('/login');
        } 
    }

    //로컬 스토리지 개별 아이템 삭제
    const  clearStorageEach =(pid, size)=>{ 
        const updateCart = cartList.filter((item)=> !(item.pid === pid && item.size === size));
            // 묶어주지 않으면 앞에만 적용되니 뒤에도 적용해주기! 
        // console.log('updateCart===>', updateCart); 
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", updateCart);
        setTimeout(()=>{
            setCartList(updateCart);
        }, 0) 

        return updateCart;
    };
    //로컬 스토리지 전체 아이템 삭제
    const clearStorageAll =()=>{
        console.log("=============> 로컬 스토리지 전체 삭제 시작"); 
        localStorage.removeItem("cartItems"); // 콜백함수 안에서 비동기식 처리가 됨
        navigate("/cartdb")
        // setTimeout(()=>{
        //     setCartList([]);
        // }, 0) //setTimeout이 실행되면 실행하는 비동기식 처리. 콜백함수로 묶어야~ 함께 비동기로 진행됨... 
        console.log("=============> 로컬 스토리지 전체 삭제 완료");
    }

    return (
        <div className="content">
            <h1>MyCart!!</h1>
            <button className='login-button' onClick={() => { handleOrder("all") }}> 주문하기 </button>
            <table border="1">
                <tr>
                    <th>PID</th>
                    <th>PNAME</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>description</th>
                    <th>Price</th>
                    <th>Img</th>
                    <th> </th>
                </tr>
                {
                    cartList && cartList.map((item)=> 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{
                                <img src={item.image} alt='' style={{width:"100px"}} />
                                }</td>
                            <td><button onClick={()=>{handleOrder("each", item.pid, item.size)}}>계속 담아두기</button></td>
                            {/* 버튼 클릭시 해당 pid상품만 저장하는 것 */}
                            {/* id가 같아도 사이즈가 다르면 분리되어있기 때문에...size까지 받아준다. */}
                        </tr>
                        )
                }
            </table>
            
        </div>
    );
}



