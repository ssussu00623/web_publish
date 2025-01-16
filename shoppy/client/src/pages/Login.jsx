import React, { useEffect, useRef, useState } from 'react';
import {validateLogin} from '../utils/funcValidate.js'
import '../styles/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export default function Login() {
    const refs = {
        "idRef" : useRef(null),
        "pwdRef" : useRef(null)
    };
    // 이 값들은 기본 null상태이며 이 값을 통해 포커스를 사용하는 것도 가능하다.
    const [formData, setFormData] = useState({'id':'', 'pwd':''});
    // useState가 활용하면 모든 값들이 자동으로 반영/선언 되기 때문에 새로고침이 없어도 되는 친절한 ~ 
    // 기본값이 비어있다고 저장되어있어야 나중에 밸리데이션 체크를(입력해주세요~) 진행할 수 있다. 

        /* form 데이터 입력 함수 */
    const handleChangeForm =(event)=>{
        // console.log(event.target.value);
        // ㅑinput tag---> 이벤트.target.value
        // setFormData에 아이디, 패스워드 저장
        const {name, value} = event.target; // value
        setFormData({...formData, [name] : value});    //property 값이 변수에 저장된 경우 [ ] 안에 호출하다.(입력 때마다 바뀌고)
        // 이렇게 주면 마지막 값만 저장되어 아이디를 입력하고 비번을 나중에 입력하면 비번만 반영된다. 그렇기 때문에 스프레드연산자를 통해
        // 이전에 폼데이터에 입력되어있던 정보를 복제 후 그대로 가져가도록 하는 것 
        // 이렇게 주는 건 객체 안에서만 사용이 가능하다.
        // 자동으로 업데이트 및 관리하는 함수이기 때문에 li나 입력 input이 많아져도 이 값은 변하지 않는다.
    }
    
    // 각 함수의 event는 전역함수가 아니고 로컬함수이기 때문에 이름이 같아도 제대로~ 기능한다. 
    // 폼에 입력된 정보를 submit이 전송할 수 있도록 전역으로 관리하는 함수인 useState를 활용해 전역함수로 만들어 준다.

    /*submit 함수 */
    const handleLoginSubmit =(event)=>{
        event.preventDefault();
        if(validateLogin(refs)) {
            console.log('sendData===>', formData);
        // 리액트 ---> 노드서버(express) 데이터 전송
        }
    }

    return (
        <div className="content">
            <h1 className="center-title">LOGIN</h1>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <p className="login-form-message">✔ 아이디와 비밀번호를 입력하신 후, 로그인을 진행해주세요.</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaUser/></span>
                            <input type="text" 
                                    name="id" 
                                    id="id" 
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    placeholder="아이디를 입력해주세요" />
                        </div>
                        <p id="error-msg-id"></p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaLock/></span>
                            <input type="password" 
                                    name="pwd" 
                                    id="pwd" 
                                    ref={refs.pwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd"></p>
                    </li>
                    <li>
                        <button type="submit" className="login-button">로그인</button>
                    </li>
                    <li>
                        <div  className="login-form-checkbox">
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">패스워드 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="login-button-naver">네이버 로그인</button>
                    </li>
                </ul>
                <div className="loginplus-image">
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div>
    );
}

