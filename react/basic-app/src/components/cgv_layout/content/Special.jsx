import SpecialItem from "./SpecialItem.jsx";
import { useState, useEffect } from "react";
// 구조분해 할당
export default function Special(){
    const [list, setList]= useState([]); //배열로초기화
    // cosnt [] = useState([]) 기본 틀부터 확실하게 외워두는 것이 좋음... ! 
    // useEffext(()=>{
    //     fetch
    //     .then()
    //     .then()
    //     .catch(error => console.log(error))
    // }, [])

    useEffect(()=>{
        fetch("/data/cgv_content.json")
        .then(data => data.json())
        .then(jsonData => setList(jsonData.specialList))//map앞에서하는 이야기로 수정된 정보
        .catch(error => console.log(error))
    }, [])
    return(
        <section>
            <div className="content-title-style">
                <h3 className="content-title-style-font">특별관</h3>
                <button className="total-view">전체보기 &gt;</button>
            </div>
            <div className="special1-content-list">
            <div>
            <div><img src="/images/special1.png" alt="special1"/></div>
            </div>          
                <ul>
                    {/* list.map 를 배열로 불러야 반복이가능한데 json은 {} 객체라서 반복이 되지않는다.
                    jsonData.specialList처럼 담당하는 이름을 직접 지정하여 알려줘야함.*/}
                    {list && list.map(item=> 
                    <li>
                        <SpecialItem 
                            text1={item.text1}
                            text2={item.text2}                        
                            />
                    </li>
                    )}
                </ul>  
            </div>
        </section>
    );
}