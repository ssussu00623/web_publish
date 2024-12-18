import React, { useRef, useState } from 'react';
import './cgv.css'
import './commons.css'
import { validateSignup, handleIdCheck, handlePwdCheck} from '../../apis/validate';
import { errorCheckSignup } from '../../apis/errorCheck';
import { initFormName } from '../../apis/initial';

export default function Signupnon() {
    // 폼데이터 저장소
    const idMsgRef = useRef(null);
    const pwdMsgRef = useRef(null);
    const refs = {
        idRef:useRef(null),
        pwdRef:useRef(null),
        cpwdRef:useRef(null),
        nameRef:useRef(null),
        phoneRef:useRef(null),
        emailNameRef:useRef(null),
        emailDomainRef:useRef(null),
    }
    const names = ['id', 'pwd', 'cpwd','name','phone','emailName','emailDomain']

    const [formData, setFormData] = useState(initFormName(names));
    // 폼의 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup=(event)=>{
        const{name,value}=event.target;
        setFormData({...formData, [name]:value})
        idMsgRef.current.style.setProperty('color','red')
        idMsgRef.current.style.setProperty('font-weight','normal')
        errorCheckSignup(name, value, errors, setErrors)
    }
    // 폼의 입력이 종료된 후 submit 함수
    const handleSubmitSignup =(event)=>{  
        event.preventDefault();
        if(validateSignup(refs, errors, setErrors)) console.log(formData);
    }
    //에러 메세지 출력하기
    const [errors, setErrors] = useState(initFormName(names))

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
                            <span 
                                id="error-msg-id"
                                ref={idMsgRef}>{errors.id}</span>
                            <div>
                                <input type="" name="id" 
                                id="id" placeholder="아이디 입력(6~20자)"
                                ref={refs.idRef}
                                value={formData.id}
                                onChange={handleChangeSignup}/>
                                <button type="button" 
                                onClick={()=>{
                                    const idparam = {
                                        'idRef':refs.idRef,
                                        'errorCheckSignup':errorCheckSignup,
                                        'errors':errors,
                                        'setErrors':setErrors,
                                        'formData':formData,
                                        'setFormData':setFormData,
                                        'idMsgRef':idMsgRef
                                    }
                                    handleIdCheck(idparam)}}>중복확인</button>
                                <input type="hidden" className="idCheckResult" value="default" />
                            </div>
                        </li>
                        <li>
                            <label for=""><b>비밀번호</b></label>
                            <span 
                                id="error-msg-pwd"
                                ref={pwdMsgRef}
                            >{errors.pwd}</span>
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
                                onBlur={()=>{
                                    const param =
                                        {'refs':refs,
                                        'errorCheckSignup':errorCheckSignup,
                                        'errors':errors,
                                        'setErrors':setErrors,
                                        'pwdMsgRef':pwdMsgRef,
                                        'formData':formData,
                                        'setFormData':setFormData}
                                        handlePwdCheck(param)}}
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
