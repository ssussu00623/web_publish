import AirbnbComponent from "./AirbnbComponent.jsx";
import { useEffect, useState } from "react";
import './Airbnb.css';

export default function AppAirbnb(){
    const [list, SetList] = useState([]);
    useEffect(()=>{
        fetch("/data/airbnb.json")
            .then(data => data.json())
            .then(jsonData=> SetList(jsonData))
            .catch(error=> console.log(error))
        }, []);

    return(
        <ul>
            {list && list.map((item)=> //true일 때만... 데이터가 null이 아닐 때만 돌린다!라는 뜻
                <li>
                <AirbnbComponent 
                            img ={item.img}
                            d1={item.d1}
                            d2={item.d2}
                            d3={item.d3}
                            d4={item.d4}
                            isGood={item.isGood} 
                            color={item.color}/>
                </li>
            )}
        </ul>
    );
}