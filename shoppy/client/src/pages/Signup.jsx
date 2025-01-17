import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize';

export default function Signup() {
    const{names,placeholders, lables, initFormData} = initSignup();
    // 앞에서 선언된 initSignup에 있던 names를 호출하여 refs가 돌아갈 수 있게 한다.
    // 선언한 걸 가져오는 거기 때문에... 순서를 꼭 지켜줘야함  
    const{refs,msgRefs} = useInitSignupRefs(names);
    // const names = ['id','pwd','cpwd','name','phone','emailname'];
    // const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '휴대폰번호', '이메일주소']
    // const placeholdersKor = ['아이디(6~12자 이내)', '비밀번호(12자 이내)', '비밀번호 확인', '이름', '휴대폰번호', '이메일주소']
    
    // const placeholders = names.reduce((acc, name, idx)=>{
    //     acc[name] = placeholdersKor[idx]; return acc;
    // }, {});
    // const lables = names.reduce((acc, name, idx)=>{
    //     acc[name] = namesKor[idx]; return acc;
    // }, {});
    // const initFormData = names.reduce((acc, name)=>{
    //     // 실행코드
    //     // 리턴다음에는 acc자리가 계속 쌓이는 것 
    //     acc[name] = ""; return acc;
    //     //{id: ""}로 자동 정리
    //     // 숫자는 생략 가능하지만 name은 꼭 줘야함
    // }, {});
    
    // const refs = useRef(
    // names.reduce((acc, name)=>{
    //     acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 호출 X이라 사용
    //     return acc;
    // }, {})
    // );
    // refs.current.emaildomain = React.createRef();
    
    
    // const msgRefs = useRef(
    //     names.reduce((acc, name)=>{
    //     acc[name.concat('MsgRef')] = React.createRef();
    //     return acc;
    // },{})
    // );
    const [formData, setFormData] =useState(initFormData)
    //change
    const handleChangeForm =(e)=>{
        const{name, value} = e.target;
        setFormData({...formData, [name]: value})
        
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validateSignup(refs, msgRefs)){
            console.log('submit====>', formData)
        };
    }

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                {   
                    names && names.map((name)=>(
                        // 리턴 키워드 없이 바로 리턴시키는거라 {}없이 ()로 진행
                        // li들이 반복되는데 li의 안의 div에 따라 달라지면 name을통해 삼항 연산자를 사용
                        <li>
                            <label for=""><b>{lables[name]}</b></label>
                            <span ref={msgRefs.current[name.concat("MsgRef")]}>{lables[name]} 입력하세요</span>
                            {/* 
                                결국 name(id)값과 같이 돌아가기 때문에(레이블즈의 프로퍼티 값) name자리를 끌어온다.
                                자바스크립트로 가져오는것...
                            */}
                            <div>
                                {name === 'emailname' ? (
                                    // {(name === 'emailname')?(<></>):(<></>)} 
                                    // :{(emailname일때)?(<>여기 여러 태그니까 빈태그로 묶어 반복되고</>):(<>아닐 땐이 태그들을 반복할래</>)} 
                                    <>
                                        <input type={(name==="pwd" || name=== "cpwd")?"password":"text"}
                                                name={name}
                                                ref={refs.current[name.concat("Ref")]}
                                                // name으로 돌고 있기 때문에 Ref를 붙여야 refs내의 idRef를 찾을 수 있다
                                                onChange={handleChangeForm}
                                                placeholder= {placeholders[name]} />
                                        <span>@</span>       
                                        <select name="emaildomain" //얘는 emailname과 묶여있어서 따로 지정해두는 것
                                                ref={refs.current["emaildomain"]}
                                                onChange={handleChangeForm} >
                                            <option value="default">선택</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                        </select>
                                    </>
                                ) : (
                                    <>
                                    <input type="text" 
                                        name={name}
                                        // id="id"
                                        ref={refs.current[name.concat("Ref")]}
                                        onChange={handleChangeForm}
                                        placeholder = {placeholders[name]} />
                                        { name === 'id' &&
                                            <>
                                            <button type="button" >중복확인</button>
                                            <input type="hidden" id="idCheckResult" value="default" />
                                            </>
                                        }
                                        
                                    </>
                                )}
                                
                            </div>
                        </li>
                    ))
                } {/**end */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
