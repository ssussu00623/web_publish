import { useState } from "react";

export default function Counter({total, click}){
    const [number, setNumber] = useState(0)
    // 화면에 바로바로 진행되에 유즈스테이트한테 일 떠넘기기 버츄얼돔에서 수가 바뀌고 브라우저에 반영됨 속도가 빨라서 거치는 것 같지 않아 보일 뿐
    function increment(){
        (number < 10) ? setNumber(number+1): setNumber(number) ;
        console.log(`number==>${number}`);
        click(number, '+'); //함수 호출하려면 ()가 필수니까...
        }
    //     if(number < 10) {
    //         setNumber(number+1);
    //     // setNumber(number++); 유즈스테이트가 관리하기 때문에 연산식의 형태를 갖춰야한다. 변수형태 수치 증가/감연상자는 실행되지 않는다.
    //     }
    // }
    
    function decrement(){
    //     if(number > 0){
    //         setNumber(number-1)
    //     }
    // }
        (number > 0) ? setNumber(number-1) : setNumber(0);
        click(number, '-');
    }

    return(
        <div className="contaner">
            <div>
            <span className="number">{number} / </span>
            <span className="total-number">{total}</span>
            </div>
            <button type="button" className="button"
            // onClick={()=>{ setNumber(number+1) }}
            // 자바스크립트로 운용되기때문에 바로 콜백으로 실핼할 수 있다. (불러오지않아도)
            onClick={increment}
            // 같은 자바스크립트이기 때문에 함수지만 값을 받을()가 없어도 된다.()가 있으면 여기에 저장되고 호출되지 않아서 수가 반영되지 않는다.
            >증가(+)</button>
            <button type="button" className="button" onClick={decrement}>감소(-)</button>
        </div>
    )
}