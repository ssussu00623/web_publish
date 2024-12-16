import React, { useRef, useState } from 'react';
import './cgv.css'
import './commons.css'
import { validateSignup } from '../../apis/validate';
import { ErrorCheckSignup } from '../../apis/errorCheck';

export default function Signup() {
    // 폼데이터 저장소
    const refs = {
        idRef:useRef(null),
        pwdRef:useRef(null),
        cpwdRef:useRef(null),
        nameRef:useRef(null),
        phoneRef:useRef(null),
        emailNameRef:useRef(null),
        emailDomainRef:useRef(null),
    }
    const init = {
        'id':'',
        'pwd':'',
        'cpwd':'',
        'name':'',
        'phone':'',
        'emailName':'',
        'emailDomain':''
    }
    const initErrors = {
        //innit과 같이 쓸 수 있겠다 생각할 수 있지만... 변수값까지 공유하기 때문에 따로줘야한다. 
        'id':'',
        'pwd':'',
        'cpwd':'',
        'name':'',
        'phone':'',
        'emailName':'',
        'emailDomain':''
    }
    const [formData, setFormData] = useState(init);
    // 폼의 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup=(event)=>{
        const{name,value}=event.target;
        setFormData({...formData, [name]:value})
        ErrorCheckSignup(name, value, errors, setErrors)
        // if(name === 'id'){
        //     (value === '')?setErrors({...errors,['id']:'아이디를 입력해주세요.'})
        //     : setErrors({...errors,['id']:''});
        // }
    }
    // 폼의 입력이 종료된 후 submit 함수
    const handleSubmitSignup =(event)=>{  
        event.preventDefault();
        if(validateSignup(refs, errors, setErrors)) console.log(formData);
    }
    //에러 메세지 출력하기
    const [errors, setErrors] = useState(initErrors)

    return (
        <div className='content'>
            <div className="center-layout">
            <div className="join-form">
            <h1 className="center-title">회원가입</h1>
            <form action="#" method="post" onSubmit={handleSubmitSignup}>
            <h3>회원가입</h3> 
                <ul className="join-ul">
                    
                    <ul>
                        <li>
                            <label for="" className="join-title-font"><b>아이디</b></label>
                            <span id="error-msg-id">{errors.id}</span>
                            <div>
                                <input type="" name="id" 
                                id="id" placeholder="아이디 입력(6~20자)"
                                ref={refs.idRef}
                                value={formData.id}
                                onChange={handleChangeSignup}/>
                                <button type="button" onclick="idCheck(event)">중복확인</button>
                                <input type="hidden" className="idCheckResult" value="default" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span id="error-msg-pwd">{errors.pwd}</span>
                            <div>
                                <input type="password" name="pwd" 
                                // oninput="handleChangeJoin(event)"
                                id="pwd"
                                ref={refs.pwdRef}
                                value={formData.pwd}
                                onChange={handleChangeSignup}
                                placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8-20자)" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호 확인</b></label>
                            <span id="error-msg-cpwd">{errors.cpwd}</span>
                            <div>
                                <input type="password" name="cpwd" 
                                id="cpwd" 
                                ref={refs.cpwdRef}
                                value={formData.cpwd}
                                onChange={handleChangeSignup}
                                // oninput="handleChangeJoin(event)"
                                // onblur="passwordCheck()"
                                placeholder="비밀번호재입력" />                        
                            </div>
                        </li>
                        <li>
                            <label for="name"><b>이름</b></label>
                            <span id="error-msg-name">{errors.name}</span>
                            <div>
                                <input type="text" name="name" 
                                id="name"
                                ref={refs.nameRef}
                                value={formData.name}
                                onChange={handleChangeSignup}
                                // oninput="handleChangeJoin(event)"
                                placeholder="이름을 입력해주세요" />                        
                            </div>
                        </li>
                        <li>
                            <label for="text"><b>전화번호</b></label>
                            <span id="error-msg-phone">{errors.phone}</span>
                            <div>
                                <input type="number" name="phone" 
                                id="phone"
                                ref={refs.phoneRef}
                                value={formData.phone}
                                onChange={handleChangeSignup}
                                // oninput="handleChangeJoin(event)"
                                placeholder="휴대폰 번호 입력('-'제외 11자리 입력)" />                        
                            </div>
                            </li>
                        <li>
                            <label for="email"><b>이메일 주소</b></label>
                            <span id="error-msg-emailname">{errors.emailName}</span>
                            <div>
                                <input type="text" 
                                name="emailName" 
                                id="emailName"
                                ref={refs.emailNameRef}
                                value={formData.emailName}
                                onChange={handleChangeSignup}
                                // oninput="handleChangeJoin(event)"
                                placeholder="이메일 주소" />
                                <span>@</span>
                                <select name="emailDomain" 
                                id="emailDomain"
                                ref={refs.emailDomainRef}
                                value={formData.emailDomain}
                                onChange={handleChangeSignup}
                                // oninput="handleChangeJoin(event)"
                                >
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
                </ul>
            </form>
        </div>
    </div>
        </div>
    );
}

