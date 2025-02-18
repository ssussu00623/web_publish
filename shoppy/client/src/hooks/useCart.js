import React, { useContext} from 'react'; 
import { CartContext } from '../context/CartContext.js';
import axios from 'axios';
// CartContext에서 provider로 감싼 값들을 호출해 사용 가능하다.


export function useCart() { // 일반 함수와 같은 형식이지만 use가 붙었으니 커스텀 훅(custom Hook)이라고 한다. 
    const { cartList, setCartList, cartCount, setCartCount } = useContext(CartContext) //3번 라인에서 설명한 것 

    //함수 생성 - 비동기 로직 & useContext가 관히하는 변수는 awit/async를 통해 순서 보장 
    /**
     * 장바구니 전체 리스트 조회
     */
    const getCartList = async()=>{
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/items", {"id":id});
        // setCartCount(cartCount + 1); 새로운 아이템이 있을 때만 넣어주면 되니 해당하는 곳에 빼준다.
        setCartList(result.data); // 모든 카트리스트 업데이트 
    }


    /**
     * 장바구니 아이템 저장
     */
    const saveToCartList = async(formData)=>{
        const result = 
        await axios .post("http://localhost:9000/cart/add", formData );
        // 레파지토리에서 처럼{'result_rows' : result.affectedRows}; 오브젝트리터럴 배열 / 구조분해할당으로 result_rows에서 확인
            //if(result.result_rows){alert("장바구니 추가 완료")} 
            // 이런 작업은 이 결과를 받은 컴포넌트에서 진행하는게 좋다. (사유= 브라우저와 연결되어있기 때문. )
            //DB연동 후 ===> cartList 가져와야함 
        if(result.data.result_rows) {
            setCartCount(cartCount + 1)
            getCartList();
        }
        return result.data.result_rows;
    }

    /*
     * 장바구니 아이템 수량 업데이트
     */
    const updateCartList = async(cid, type)=>{
        const result = 
        await axios.put("http://localhost:9000/cart/updateQty", {"cid": cid, "type":type} )
        result.data.result_rows && getCartList();
        return result.data.result_rows;
    }

    /**
     * 장바구니 전체 카운트 조회
     */
    const getCount = async()=> {
        const id = localStorage.getItem("user_id")
        const result = await axios.post("http://localhost:9000/cart/count", {"id": id} ) // 로그인 상태에서만 보이니까 아이디가 필요함
        setCartCount(result.data.count);
        return result.data.count;
    } 

    /**
     * 장바구니 카운트 초기화
     */
    const setCount =(value)=>{ setCartCount(value); }

    return { saveToCartList, updateCartList, getCartList, getCount, setCount};
    // return { 함수, .... }; 
    // 위에서 생성한 함수를 외부에서도 사용할 수 있어야하기 때문에 return해야한다 ! (여기선 detailProduct에서 호출해오는 것)
}

