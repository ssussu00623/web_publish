import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate';

export default function Signup() {
    const names = ['id','pwd','cpwd','name','phone','emailname'];
    const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '휴대폰번호', '이메일주소']
    const placeholdersKor = ['아이디(6~12자 이내)', '비밀번호(12자 이내)', '비밀번호 확인', '이름', '휴대폰번호', '이메일주소']
    
    const placeholders = names.reduce((acc, name, idx)=>{
        acc[name] = placeholdersKor[idx]; return acc;
    }, {});
    const lables = names.reduce((acc, name, idx)=>{
        acc[name] = namesKor[idx]; return acc;
    }, {});
    const initFormData = names.reduce((acc, name)=>{
        // 실행코드
        // 리턴다음에는 acc자리가 계속 쌓이는 것 
        acc[name] = ""; return acc;
        //{id: ""}로 자동 정리
        // 숫자는 생략 가능하지만 name은 꼭 줘야함
    }, {});
    
    const refs = useRef(
    names.reduce((acc, name)=>{
        acc[name.concat('Ref')] = React.createRef(); //useRef(null) Hook 바로 호출 X이라 사용
        return acc;
    }, {})
    );
    refs.current.emaildomain = React.createRef();
    
    
    const msgRefs = useRef(
        names.reduce((acc, name)=>{
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
    },{})
    );
    const [formData, setFormData] =useState(initFormData)
    //change
    const handleChangeForm =(e)=>{
        const{name, value} = e.target
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
                                        <input type="text" 
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
// import React, { useState, useRef } from 'react';
// import '../styles/signup.css';
// import { validateSignup, handleDuplicateIdCheck, handlePasswordCheck } from '../utils/funcValidate.js';
// import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

// export default function Signup() {
//     const{names,placeholders, lables, initFormData} = initSignup();
//     const{refs,msgRefs} = useInitSignupRefs(names);
//     const [formData, setFormData] =useState(initFormData)
//     const [idCheckResult, setIdCheckResult]=useState('default');
//     // 브라우저가 "중복체크" 부분의 값을 관리하려 들기 때문에 리액트가 관리할 수 있도록 따로 선언하기
//     //change
//     const handleChangeForm =(e)=>{
//         const{name, value} = e.target;
//         setFormData({...formData, [name]: value}) 
//     };
//     const handleSubmit=(e)=>{
//         e.preventDefault();

//         if(validateSignup(refs, msgRefs)){
//             if(idCheckResult === "default"){
//                 alert("중복확인을 진행해주세요");
//                 return false;
//             } else {
//             console.log('submit===>',formData);
//             }   
//         }
//     };


//     return (
//         <div className="content">
//             <h1 className="center-title">SIGINUP</h1>
//             <form className="signup-form" onSubmit={handleSubmit}>
//                 <ul>
//                 {   
//                     names && names.map((name)=>(
//                         // 리턴 키워드 없이 바로 리턴시키는거라 {}없이 ()로 진행
//                         // li들이 반복되는데 li의 안의 div에 따라 달라지면 name을통해 삼항 연산자를 사용
//                         <li>
//                             <label for=""><b>{lables[name]}</b></label>
//                             <span ref={msgRefs.current[name.concat("MsgRef")]}>{lables[name]} 입력하세요</span>
//                             {/* 
//                                 결국 name(id)값과 같이 돌아가기 때문에(레이블즈의 프로퍼티 값) name자리를 끌어온다.
//                                 자바스크립트로 가져오는것...
//                             */}
//                             <div>
//                                 {(name === 'emailname') ? (
//                                     // {(name === 'emailname')?(<></>):(<></>)} 
//                                     // :{(emailname일때)?(<>여기 여러 태그니까 빈태그로 묶어 반복되고</>):(<>아닐 땐이 태그들을 반복할래</>)} 
//                                     <>
//                                         <input type="text" 
//                                             name={name}
//                                             // id="id"
//                                             ref={refs.current[name.concat("Ref")]}
//                                             onChange={handleChangeForm}
//                                             placeholder = {placeholders[name]} />
//                                         <span>@</span>       
//                                         <select name="emaildomain" //얘는 emailname과 묶여있어서 따로 지정해두는 것
//                                                 ref={refs.current["emaildomain"]}
//                                                 onChange={handleChangeForm} >
//                                             <option value="default">선택</option>
//                                             <option value="naver.com">naver.com</option>
//                                             <option value="gmail.com">gmail.com</option>
//                                             <option value="daum.net">daum.net</option>
//                                         </select>
//                                     </>
//                                 ) : (
//                                     <>
//                                     <input type={(name==="pwd" || name=== "cpwd")?"password":"text"}
//                                                 name={name}
//                                                 ref={refs.current[name.concat("Ref")]}
//                                                 // name으로 돌고 있기 때문에 Ref를 붙여야 refs내의 idRef를 찾을 수 있다
//                                                 onChange={handleChangeForm}
//                                                 // onBlur={(pwdRef.current.value === cpwdRef.current.value)?(
//                                                 //     alert('비밀번호가 일치합니다')
//                                                 // ):(alert('비밀번호가 일치하지 않습니다'))}
//                                                 onBlur={(name === 'cpwd')?
//                                                     ()=>{handlePasswordCheck(
//                                                         refs.current["pwdRef"],
//                                                         refs.current["cpwdRef"],
//                                                         refs.current["nameRef"],
//                                                         msgRefs.current["pwdMsgRef"],
//                                                         msgRefs.current["cpwdMsgRef"]
//                                                         )}
//                                                 :null
//                                                 }
//                                                 // 콜백함수로 넘기는게 아니면 ! 브라우저에 권한이 넘어가버린다 주의 
//                                                 placeholder= {placeholders[name]}
//                                                 />
//                                         { name === 'id' &&
//                                             <>
//                                             <button type="button" 
//                                             onClick={()=>{
//                                                 handleDuplicateIdCheck(
//                                                     refs.current["idRef"],
//                                                     msgRefs.current["idMsgRef"],
//                                                     refs.current["pwdRef"],
//                                                     setIdCheckResult
//                                                     )
//                                                 }}>
//                                                 중복확인</button>
//                                             <input type="hidden" 
//                                             value={idCheckResult} />
//                                             </>
//                                         }
                                        
//                                     </>
//                                 )}
                                
//                             </div>
//                         </li>
//                     ))
//                 } {/**end */}
//                     <li>
//                         <button type="submit">가입하기</button>
//                         <button type="reset">가입취소</button>
//                     </li>
//                 </ul>
//             </form>
//         </div>
//     );
// }
