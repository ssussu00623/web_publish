import React from 'react';

export default function Login() {
    return (
        <div>
            <div>
                <h2>Ligin</h2>
            </div>
            <form action="">
                <ul>
                    <li>
                        <label>아이디</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label>아이디</label>
                        <input type="text" />
                    </li>
                    <div>
                        <button>로그인</button>
                    </div>
                    <div>
                        <input type="radio" /> 아이디 저장
                        <a href="#">아이디 찾기</a>
                        <a href="#">패스워드 찾기</a>
                    </div>
                    <div>
                        <button>네이버 로그인</button>
                    </div>
                </ul>
            </form>
        </div>
    );
}
