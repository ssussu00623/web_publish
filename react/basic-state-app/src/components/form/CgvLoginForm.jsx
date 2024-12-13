import React, { useState } from 'react';
import './cgv.css';

export default function CgvLoginForm() {
    
    const initFormData = {'id':'', 'pwd':''};
    const [formData, setFormData] = useState(initFormData);

    const handleChangeForm = (event) => {
        console.log(event.target);
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    
    const handleSubmit =(event)=>{
        event.prevntDefault();
        console.log(formData);
        
    }

    return (
        <div>
            <div className="content">
        <div className="center-layout login-form">
            <h1 className="center-title">로그인</h1>
            <form action="login-form" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <i className="fa-regular fa-user"></i>
                            <input type="text" 
                                    name="id" 
                                    // id="id" 
                                    value={formData.id} 
                                    // oninput="handleChange(event)"
                                    onChange={handleChangeForm}
                                    placeholder="아이디를 입력해주세요" />
                        </div>
                        <p id="error-msg-id"></p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" 
                                    name="pwd" 
                                    // id="pwd" 
                                    value={formData.pwd} 
                                    // oninput="handleChange(event)"
                                    onChange={handleChangeForm}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd"></p>
                    </li>
                    <li>
                        <button className= "cgv-login" type="button" 
                        // onclick="loginFormCheck()"
                        onChange={handleSubmit}
                        >로그인</button>
                    </li>
                    <li>
                        <div>
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
                        <button className= "cgv-login" type="button"  
                        // onclick="loginFormCheck()"
                        >네이버 로그인</button>
                    </li>
                </ul>
                <div>
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div>
    </div>
        </div>
    );
}

