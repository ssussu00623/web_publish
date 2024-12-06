import HeaderBottomMenu from './HeaderBottomMenu.jsx';
import { useState, useEffect } from "react";
import { fetchJSON } from '../js/commons.js';

export default function HeaderBottomMenuList(){
    const [names, SetNames] = useState([]);
    
    // useEffect(()=>{
    //     fetchJSON(("/data/cgv_header.json"))
    //     .then(result =SetNames(result.bottomMenuList))
    //     .catch(error => console.log(error))
    // }, [])



    useEffect(()=>{
        fetch(("/data/cgv_header.json"))
        .then(data=> data.json())
        .then(jsonData => SetNames(jsonData.bottomMenuList))
        .catch(error => console.log(error))
    }, [])
    
    return(
        <ul className="flex-container">
                {names&&names.map(item => 
            <li>
                <HeaderBottomMenu 
                name={item.name} />
                {/* 그냥 name으로 넘기면 위 names의 객체 값이 넘어감!!! 정보값인 item이 넘어가는 것을 유의. */}
            </li>
                )} {/*반복할 정보 앞에서 나와야함 여긴 li가 반복*/}
        </ul>
        );
    }