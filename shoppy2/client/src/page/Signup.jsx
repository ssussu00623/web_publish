import React, { useRef, useState } from 'react';
import { validateSignup } from '../utils/funcValidate';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize';
import '../styles/signup.css';

export default function Signup() {
    const{names,placeholders, labels, initFormData} = initSignup();
    const{refs,msgRefs} = useInitSignupRefs(names);

    const handleChangeForm=(event)=>{
        const{name, value} = event.target;
        // console.log(event.target.value);
        setFormData({...formData, [name]: value})
    }
    const handleSignupsubmit=(event)=>{
        event.preventDefault();
        if(validateSignup(refs, msgrefs)){
            console.log(('submit===>', formData));
        }
    }
    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSignupsubmit}>
                <ul> 
                    {names && names.mpa((name)=>(
                    <><li>
                            <label for=""><b>{labels[name]}</b></label>
                            <span ref={msgRefs.currunt[name.concat("MsgRef")]}>{labels[name]}입력해주세요</span>
                            <div>
                                <input type="text"
                                    name={labels[name]}
                                    ref={msgRefs.currunt[name.concat("Ref")]}
                                    onChange={handleChangeForm}
                                    placeholder={placeholders} />
                                    {(refs.name === "idRef")?(
                                        <>
                                        <button type="button">중복확인</button>
                                        <input type="hidden" id="idCheckResult" value="default" 
                                        />
                                        </>):null}
                                
                            </div>
                        </li>
                        {(name === "emailRef")?(
                            <>
                            <label for=""><b>이메일 주소</b></label>
                            <span ref={msgRefs.msgemailnameRef}>이메일 주소를 입력해주세요</span>
                            <div>
                                <input type="text"
                                    name="emailname"
                                    id="emailname"
                                    ref={refs.current[emailname]}
                                    onChange={handleChangeForm}
                                    placeholder="이메일 주소" />
                            </>
                        ):()}
                            <li>
                                    <span>@</span>
                                    <select name="emaildomain"
                                        id="emaildomain"
                                        ref={refs.emaildomainRef}
                                    >
                                        <option value="default">선택</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                </div>
                            </li>
                        </> ))
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


{/**
                        <li>
                        <label for=""><b>비밀번호</b></label>
                        <span ref={msgrefs.msgpwdRef}>12자 이내의 비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    ref={refs.pwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span ref={msgrefs.msgcpwdRef}>비밀번호 확인을 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    id="cpwd"
                                    ref={refs.cpwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span ref={msgrefs.msgnameRef}>이름을 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    ref={refs.nameRef}
                                    onChange={handleChangeForm}
                                    placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span ref={msgrefs.msgphoneRef}>휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    ref={refs.phoneRef}
                                    onChange={handleChangeForm}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
 */}