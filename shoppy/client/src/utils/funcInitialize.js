import React, { useState, useRef } from 'react';

/************************************************
 * Signup 컴포넌트 초기화 작업
************************************************/

export function initSignup(){
    const names = ['id','pwd','cpwd','name','phone','emailname'];
    const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '휴대폰번호', '이메일주소']
    const placeholdersKor = ['아이디(6~12자 이내)', '비밀번호(12자 이내)', '비밀번호 확인', '이름', '휴대폰번호', '이메일주소']
    
    /**배열.reduce */
    const placeholders = names.reduce((acc, name, idx)=>{
        acc[name] = placeholdersKor[idx]; return acc;
    }, {});
    const lables = names.reduce((acc, name, idx)=>{
        acc[name] = namesKor[idx]; return acc;
    }, {});
    const initFormData = names.reduce((acc, name)=>{ 
        acc[name] = ""; return acc;
    }, {});
    
    return{names, placeholders, lables, initFormData}
    // names나 namesKor는 밖에서 사영되지않기 때문에... 리턴할 것들을 선정하여 내보낸다. 
}

/*
    이니셜라이징
*/
export function useInitSignupRefs(names){
    /*use Ref */
    // 훅이 관리하는만큼 훅에 있는 객체가 되어  리액트에서 기본 관리된다.
    // 외부에서 사용하려면 커스텀훅으로 만들어 export해야함
    // 각각 const를 내보낼 수 없기 때문에... 부모를 붙여준다고 이해함 레퍼런스를 할 수 있기위해 hook에서 관리하도록 함수도 use를 붙여준다. 
    // hook함수가 아니지만 리액트 속이기용.
    const refs = useRef(
        names.reduce((acc, name)=>{
            acc[name.concat('Ref')] = React.createRef(); 
            //useRef(null) Hook 바로 호출 X이라 사용 
            return acc;
        }, {})
        );
        refs.current.emaildomainRef = useRef(React.createRef());
        // 화면상의 새로운 이벤트를 진행할 때 domain은 useRef로 남싸져있지 않기 때문에 따로 지정하여 넣어준다.
        // 중복확인 후 아이디를 바꾼다던가 했을 때... 도메인의 select값이 초기화 돼서 안 넘어오기 때문에 넘겨줄 수 있도록 지정 한 것 
        
        const msgRefs = useRef(
            names.reduce((acc, name)=>{
            acc[name.concat('MsgRef')] = React.createRef();
            return acc;
        }, {})
    );
    return{refs,msgRefs};
}
/*
    애로우 형식도 가능
    export const initSignup=()=>{ }
*/