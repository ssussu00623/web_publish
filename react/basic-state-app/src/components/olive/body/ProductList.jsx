import React, { useEffect, useState } from 'react';
import Product from './Product';


export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]) //전체 상품 리스트
    const [list, setList] = useState([]) // 출력용리스트 이게 없으면 1번필터링 된 상태에서 추가 필터링을 하기 때문에... 필터링 된 값의 중간 저장 매개체가 필요한것
    
    useEffect(()=>{
        fetch("/data/olive.json")
            .then(data => data.json())
            .then(jsonData=> {
                setProductList(jsonData);
                setList(jsonData);
            })
            .catch()
    }, [])
    const totalCart=(id)=>{
        // alert(`productList- ${id}:::카트 클릭!!!`)
        cart(id);
        // 여기서 AppOlive의 handleCartApp 함수 호출
    }
    const [type, setType] = useState('total');
    //라디오 버튼에서 클릭된 밸류값을 여기서 관리하게 시킨다.

    const handleTypeChange=(event)=>{
        setType(event.target.value);
        // 오브젝트 리터럴 타입이기 때문에 . . 으로 이동한다.        
    }
    console.log(`type---> ${type}`);
    
    useEffect(()=>{
        // 실시간으로 처리되는 게 아니니 위의 useEffect처럼 불러들여서 필터링하는게 아니라 가지고 왔던 데이터를 토대로 진행하는 게 속도 면에서 효율적이다.
        // 실시간으로 처리한다면 때마다 자료를 받아서 활용하는게 정확도 면에서 권장함 
        // productList.map()---> 결과 : [] 새로운 배열 생성 후 li태그가 만들어짐 ['<li>~</li>']
        // productList.filter()---> 결과 : [] 조건에 맞는 데이터가 있다면 배열에 정보가 들어감 [{item}] 
        if(type === 'total'){
            setList(productList);
        } else {
            const list = productList.filter((item)=>{
                if(type==="sale" && item.isSale){
                    return item;
                } else if(type==="coupon" && item.isCupon){
                    return item;
                } else if(type==="today" && item.isToday){
                    return item;
                }
            });
            setList(list)
        }
        }, [type]) //useEffect : type

    
    //무엇인가 변경 됐을 때자동으로 업데이트 할 수 있도록 리액트에게 할당하는 것
    // 쿠폰이 적용되던상품이 쿠폰 적용이 끝나고 오늘드림만 지원되어도 알아서~ 자동으로 호출 되게 하는 것 
    // 다른 곳에 영향을 줘서 이펙트... 타입값이 변할 때마다 이팩트 내부의 값에 영향이 간다. 이걸 통해서 필터링을 여기서 작업하는 것. 
    return (
        <>
        <div>
            <input type="radio" name='type' value="total" onClick={handleTypeChange}/>전체
            {/* input타입의 경우 이벤트에대한 정보를 함수에게 자동으로긴다. */}
            <input type="radio" name='type' value="sale" onClick={handleTypeChange}/>세일
            <input type="radio" name='type' value="coupon" onClick={handleTypeChange}/>쿠폰
            <input type="radio" name='type' value="today" onClick={handleTypeChange}/>오늘드림
        </div>
        <ul className='Product-list-container'>
            {list&&list.map((item)=>
                <li> 
                    <Product 
                        totalCart={totalCart}
                        id={item.id}
                        img ={item.img}
                        alt ={item.alt}
                        title ={item.title}
                        description ={item.description}
                        price ={item.price}
                        sale ={item.sale}
                        isSale ={item.isSale}
                        isCupon ={item.isCupon}
                        isToday ={item.isToday}
                    /> 
                </li> 
            )}
        </ul>
    </>
    );
}

