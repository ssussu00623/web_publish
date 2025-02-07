import React, { useEffect, useState } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const[list, setList] = useState([]);
    // useState로 list 변경시 실시간 업데이트. 리액트가 알아서 관리할 수 있게 부여하기위해...

    useEffect(()=>{
        // axios.get('/data/product.json')
        //     .then((res)=>setList(res.data))
        //     .catch((error)=>console.log(error));
        // 이건 DB연동 전의 이야기니까... 
        axios
            .get('http://localhost:9000/product/all')
            .then(res => setList(res.data))
            .catch(error => console.log(error))
    }, []);
            //엑시오스는 혼자만 동작하는 게아니라 get을 이용해야한다.
        // 네트워크를 통해 사용하는 거기 때문에.. 정보값들이 조금 다름 
        // 서버와 서버의 연동을 위해 axio를 사용 
            // fetch('data/product.json') <--- 이 방법은 이제 사용 X
        //     .then((data)=>data.json())
        //     .then((jsonData)=> {
        //         setList(jsonData)
        //         // 자바스크립트는 객체마다 스콥이 부여되기 때문에... 
        //         // json데이터를 전역변수로 만들어주기 위해 setList로 넘긴다 
        //     })
        //     .catch()
    //출력 리스트 생성 [ [{},{},{}],[{},{},{}],[{}] ]
    const rows = [];
    for(let i = 0; i<list.length; i+=3){ 
        rows.push(list.slice(i, i+3));
    }
    //[{0},{1},{2}], {3} ... 이렇게 2번지에서 자르고
    // slice는 자동으로 배열을 생성한다. 숫자마다 자르고 반복.
    // console.log(rows)    
    return (
        <div>
            {rows.map((rowArray, index)=>
                <div key={index} className='product-list'>
                    {rowArray.map((product)=>
                        <Link key={product.pid} to={`/products/${product.pid}`}>
                            <ProductAvata 
                                img={`${product.image}`}/>
                        </Link>
                        )
                    }
                </div>
                )
            }
        </div>
    );
}

// 유니크한 정보를 가져오고 싶을 때... json 정보를 구분할 수 있는 정보값은 product의 pid이다.
// 이 값을 불러올 수 있게 Link에 값을 삽입하기...