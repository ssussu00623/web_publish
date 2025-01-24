import React from 'react';
import '../styles/signup.css';

export default function SignUp() {
    return (
        <div className="content">
            <h1 className="center-title">SIGNUP</h1>
            <form className="signup-form" >
                <ul>
                    <li>
                        <label>아이디</label>
                        <span>아이디를 입력하세요</span>
                        <input type="text" />
                        <button type='button'>중복확인</button>
                    </li>
                    <li>
                        <label>비밀번호</label>
                        <input type="password" />
                    </li>
                    <li>
                        <label>비밀번호 확인</label>
                        <input type="password" />
                    </li>
                    <li>
                        <label>이름</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label>휴대번호</label>
                        <input type="number" />
                    </li>
                    <li>
                        <label>이메일주소</label>
                        <input type="text" />
                        <span>@</span>
                        <select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </li>
                </ul>
                <div>
                    <button type='button'>가입하기</button>
                    <button type='reset'>가입취소</button>
                </div>
            </form>
        </div>
    );
}

