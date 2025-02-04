import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup, 
            handleDuplicateIdCheck, 
            handlePasswordCheck} from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {   
    const navigate = useNavigate();
    const {names, placeholders, labels, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);
    const [formData, setFormData] = useState(initFormData);
    const [idCheckResult, setIdCheckResult] = useState('default');

    
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});       
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateSignup(refs, msgRefs, formData)) {    
            if(idCheckResult === "default") {
                alert("중복 확인을 진행해 주세요");
                return false;
            } else {
                console.log('submit ---->> ', formData); 
                // 서버로 폼데이터를 보내고 ==> DB연동하여 insert     
                // GET : URL을 통해 경로가 호출 되거나 데이터 전달 => 패킷의 Header에 붙어 넘어가기 때문에 => req.params 서버의 파람즈로 받는다
                //      ㄴ 보안 필요 X , 데이터가 작을 때!
                // POST : URL 주소로 경로 호출, 데이터 전달 => 패킷의 Body로 넘어간다 => req.body 
                //      ㄴ 보안 필요한 데이터의 경우, 큰 데이터를 전달할 때 사용 
                /*
                axios.post('경로', 전송할객체{}<- 이 타입만 넘어감...아마도?) 
                        .then() insert가 성공했을 때 넘어가는 것 
                        .catch() 오류 잡기
                */
                axios.post('http://localhost:9000/member/signup', formData)
                // .then(res=> console.log('res.data===>',res.data))
                .then(res=> {
                    if(res.data.result_rows === 1){
                    alert("회원가입에 성공하셨습니다.");
                    // 회원 가입에 성공하면 로그인 페이지로 이동하는 것... 
                    // 1. 리액트적인 방법 ==> useNavigate (리액트 라우터 돔)
                    //  navigate('/login')
                    // 2. setTimeout활용. 확인버튼 클릭 후 3초 경과 
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000);
                    // 3. window.location.href = '/login'
                    // 윈도우가 실행하도록 하는 방법이기 때문에.... 권장하지 않음. 리액트 적인 걸 해보자.
                    } else if(res.data.result_rows === 0){
                        alert("회원가입에 실패하였습니다")
                    }
                }) 
                // .catch(error=> console.log(error));
                .catch(error=>{
                    alert("회원가입에 실패하였습니다");
                    console.log(error);
                });
            }   
        } 
    }



    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul>
                    {
                        names && names.map((name)=>(
                            <li>
                                <label><b>{labels[name]}</b></label>
                                <span ref={msgRefs.current[name.concat("MsgRef")]}>{labels[name]}를 입력해주세요</span>
                                <div>
                                    { (name === "emailname") ? (
                                        <>
                                            <input type="text"
                                                    name={name}
                                                    ref={refs.current[name.concat("Ref")]} 
                                                    onChange={handleChangeForm}
                                                    placeholder={placeholders[name]} />
                                            <span>@</span>       
                                            <select name="emaildomain" 
                                                    ref={refs.current["emaildomainRef"]}
                                                    onChange={handleChangeForm}
                                                    >
                                                <option value="default">선택</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="daum.net">daum.net</option>
                                            </select>
                                        </>
                                    ) : (
                                        <>
                                            <input type={(name==="pwd" || name==="cpwd") ? "password" : "text"}
                                                name={name}
                                                ref={refs.current[name.concat("Ref")]}
                                                onChange={handleChangeForm}
                                                onBlur={(name === 'cpwd') ? ()=>{
                                                        handlePasswordCheck(
                                                            refs.current["pwdRef"],
                                                            refs.current["cpwdRef"],
                                                            refs.current["nameRef"],
                                                            msgRefs.current["pwdMsgRef"],
                                                            msgRefs.current["cpwdMsgRef"]
                                                        )
                                                    } : null}
                                                placeholder = {placeholders[name]} />
                                            {  name === "id" &&
                                                <> 
                                                    <button type="button"
                                                            onClick={()=>{
                                                                handleDuplicateIdCheck(
                                                                                refs.current["idRef"],
                                                                                refs.current["pwdRef"],
                                                                                msgRefs.current["idMsgRef"],
                                                                                setIdCheckResult
                                                                )
                                                            }}
                                                            >중복확인</button>
                                                    <input type="text"                                                             
                                                            value={idCheckResult}
                                                            />
                                                </> 
                                            } 
                                        </>
                                    )}                                  
                                </div>
                            </li>
                        ))
                    }
                
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}