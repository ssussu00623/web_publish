import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate';

export default function Signup() {
    const msgRefs = {
        "msgidRef":useRef(null),
        "msgpwdRef":useRef(null),
        "msgcpwdRef":useRef(null),
        "msgnameRef":useRef(null),
        "msgphoneRef":useRef(null),
        "msgemailnameRef":useRef(null),
        "emaildomainRef":useRef('default')
    }
    const refs = {
        "idRef":useRef(null),
        "pwdRef":useRef(null),
        "cpwdRef":useRef(null),
        "nameRef":useRef(null),
        "phoneRef":useRef(null),
        "emailnameRef":useRef(null),
        "emaildomainRef":useRef('default')
    }
    //change data관리
    const initFormData  = {
        'id':'',
        'pwd':'',
        'cpwd':'',
        'name':'',
        'phone':'',
        'emailname':'',
        'emaildomail':''
    }
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
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span ref={msgRefs.msgidRef}>아이디를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" >중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span ref={msgRefs.msgpwdRef}>12자 이내의 비밀번호를 입력해주세요</span>
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
                        <span ref={msgRefs.msgcpwdRef}>비밀번호 확인을 입력해주세요</span>
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
                        <span ref={msgRefs.msgnameRef}>이름을 입력해주세요</span>
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
                        <span ref={msgRefs.msgphoneRef}>휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    ref={refs.phoneRef}
                                    onChange={handleChangeForm}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span ref={msgRefs.msgemailnameRef}>이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    ref={refs.emailnameRef}
                                    onChange={handleChangeForm}
                                    placeholder="이메일 주소" />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain" 
                                    ref={refs.emaildomainRef}
                                    onChange={handleChangeForm} >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
