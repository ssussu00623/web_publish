import Dwitter from './Dwitter.jsx';
import './Dwitter.css';
import { useEffect, useState } from 'react';


// Dwitter.jsx 실제 출력되는 내용 - 화면

export default function AppDwitter(){
    const [dwitters, setDwitters] = useState([]); //저장하는 변수도 모두 리액트가 관리한다.
    
    //network를 통해 접속 진행 시 ==> useEffect() 리액트 Hooks 사용한다! 
    //useEffect를 활용해 처리를 맡기는 거...
    //react - hooks -- useEffect();
    //useEffect(callback함수,dependencies) : 맨 처음에 실행되는 함수 
    // 비동기식 처리하는 것들을 실행하는 함수. 모든 코드들 중 가장 먼저 실행됨(위치 상관X)
    // 리액트에서 imfort할 것. 
        //useEffect는 useState로만 관리할 수 있다. 상호고정.
    //useEffect는 useState로만 관리할 수 있다. 리액트가 관리하기 때문에 상호고정.
    useEffect(()=>{ //맨 처음 한 번만 호출하도록 상태 관리
        fetch("data/dwitters.json")
        .then((result)=> result.json())
        .then((jsonData)=> setDwitters(jsonData))
        .catch(error=> console.log(error));
    }, []);
    console.log(`dwitters--> ${dwitters}`);
    // const dwitters = ;[
        // {"img":"/images/people1.webp",
        //     "name": "Smith",
        //     "id": "@smith",
        //     "date": "2024.10.01",
        //     "content": "겨울입니다. 감기 조심하세요."
        // },
        // {"img":"/images/people2.webp",
        //     "name": "James",
        //     "id": "@jamese",
        //     "date": "2024.10.02",
        //     "content": "겨울은 멀었습니다."
        // },
        // {"img":"/images/people3.webp",
        //     "name": "Kelly",
        //     "id": "@kelly",
        //     "date": "2024.10.03",
        //     "content": "내일의 날짜는 1004."
        // },
        // {"img":"/images/people1.webp",
        //     "name": "Smith",
        //     "id": "@smith",
        //     "date": "2024.10.01",
        //     "content": "겨울입니다. 감기 조심하세요."
        // },
        // {"img":"/images/people2.webp",
        //     "name": "James",
        //     "id": "@jamese",
        //     "date": "2024.10.02",
        //     "content": "겨울은 멀었습니다."
        // },
        // {"img":"/images/people3.webp",
        //     "name": "Kelly",
        //     "id": "@kelly",
        //     "date": "2024.10.03",
        //     "content": "내일의 날짜는 1004."
        // },
    // ];
    // 너무 길다면 fetch를 이용해 json으로받아 만들 수도 있다.
    return(
        <div className='diwtter-container'>
            <h1>Dwitter</h1>
            <ul className='dwitter-menu'>
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Logun Singup</li>
            </ul>
            {/* map을 이용하는 방법 */}
            {dwitters.map((dwitter)=>
                <Dwitter 
                    img={dwitter.img}
                    name = {dwitter.name}
                    id = {dwitter.id}
                    date = {dwitter.id}
                    content={dwitter.content} />
            )};
                
            {/* 아래의 정보는Dwitter map을 통해 출력하도록 한다.
            그렇지 않으면단순하게 같은 내용 반복임 단순반복버전*/}
            {/* <Dwitter 
                img= "/images/people1.webp"
                name= "Smith"
                id= "@smith"
                date= "2024.10.01"
                content= "겨울입니다. 감기 조심하세요."/>
            <Dwitter 
                img= "/images/people2.webp"
                name= "James"
                id= "@james"
                date= "2024.10.02"
                content= "겨울은 멀었습니다."/>
            <Dwitter 
                img= "/images/people3.webp"
                name= "Kelly"
                id= "@kelly"
                date= "2024.10.03"
                content= "내일의 날짜는 1004"/> */}
        </div>
    );
}