import React, { useState } from 'react';
import Counter from './Counter.jsx';

export default function AppCounter2() {
    const [total, setTotal] = useState(0)
    const handleTotal = (type)=>{ //자식에게 이벤트가 생기면 알려달라는 호출 함수 모두 힙에 저장 됨 
        type === '+' ? setTotal(total+1) : setTotal(total-1)
    }

    return (
        <div>
            <Counter total={total} click={handleTotal}/>
            <Counter total={total} click={handleTotal}/>
            <Counter total={total} click={handleTotal}/>
        </div>
    );
}

