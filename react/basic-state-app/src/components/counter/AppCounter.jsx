// import Counter from "./Counter.jsx";
// import { useState } from "react";
// import './counter.css'

// export default function AppCounter(){
//     const [totalNumber,setTotalNumber] = useState(0);

//     // totalNumber 변경 => 자식인 카운터 컴퍼넌트 이벤트가 발생했을 때
//     const handleClick=(number, type)=>{
//         // console.log('AppCounter!!');
//         if(number<10 && type ==='+' ){
//             setTotalNumber(totalNumber + 1)
//         } else if(number>0 && type === "-"){
//             setTotalNumber(totalNumber - 1)
//         }
//     }


//     return(
//         <div className="counter-container">
//             <Counter total={totalNumber} click={handleClick} />
//             {/* 자식에게 일어나는 이벤트를 부모에게 넘겨서  
//             click={handleClick}은 click이 값을 넘겨주는 key값 뿐
//             값이 아니기 때문에 이벤트 설정과 헷갈리지 말자*/}
//             <Counter total={totalNumber} click={handleClick} />
//             {/* // props로 하는 건 또같지만 함수도 넘어감 */}
//         </div>
//     )
// }
import Counter from './Counter.jsx';
import { useState } from 'react';
import './counter.css'

export default function AppCounter() {
    const [totalNumber, setTotalNumber] = useState(0);

    //totalNumber 변경 => 자식인 Counter 컴포넌트 이벤트가 발생했을 때
    const handleClick = (number, type) => {
        if(number < 10 &&  type === '+') {
            setTotalNumber(totalNumber + 1);
        } else if(number > 0 &&  type === '-') {
            setTotalNumber(totalNumber - 1);
        }
    }

    return (
        <div className="counter-container">
            <Counter total={totalNumber} click={handleClick} />
            <Counter total={totalNumber} click={handleClick} />
            <Counter total={totalNumber} click={handleClick} />
        </div>
    );
}