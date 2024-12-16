import React, { useRef, useState } from 'react';
import { validateLogin3 } from '../../apis/validate';
import { ErrorCheckLogin } from '../../apis/errorCheck';

export default function Login3() {
    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null),
        nameRef : useRef(null),
        addressRef:useRef(null),
        numberRef :useRef(null)
    }
    const init = {'id':'','pwd':'','name':'','address':'','number':''}
    const initError = {'id':'','pwd':'','name':'','address':'','number':''}
    const [form, setForm] = useState(init)
    const handleChangLogin=(event)=>{
        const {name, value} = event.target;
        setForm({...form, [name]:value})
        ErrorCheckLogin(name, value, loginErrors, setLoginErrors)
    }
    const [loginErrors, setLoginErrors] = useState(initError)
    const handleSubmitLogin=(event)=>{
        event.preventDefault();
        if(validateLogin3(refs, loginErrors, setLoginErrors)) console.log(form);
    }
    return (
        <form onSubmit={handleSubmitLogin}>
            <ul>
                <li>
                    <label>아이디</label>
                    <input type="text" 
                    name='id'
                    ref={refs.idRef}
                    value={form.id}
                    onChange={handleChangLogin}
                    />
                </li>
                <span style={{'color':'red'}}>{loginErrors.id}</span>
                <li>
                    <label>비밀번호</label>
                    <input type="password" 
                    name='pwd'
                    ref={refs.pwdRef}
                    value={form.pwd}
                    onChange={handleChangLogin}
                    />
                </li>
                <span style={{'color':'red'}}>{loginErrors.pwd}</span>
                <li>
                    <label>이름</label>
                    <input type="text" 
                    name='name'
                    ref={refs.nameRef}
                    value={form.name}
                    onChange={handleChangLogin}
                    />
                </li>
                <span style={{'color':'red'}}>{loginErrors.name}</span>
                <li>
                    <label>주소</label>
                    <input type="text"
                    name='address'
                    ref={refs.addressRef}
                    value={form.address}
                    onChange={handleChangLogin}
                    />
                </li>
                <span style={{'color':'red'}}>{loginErrors.address}</span>
                <li>
                    <label>번호</label>
                    <input type="number" 
                    name='number'
                    ref={refs.numberRef}
                    value={form.number}
                    onChange={handleChangLogin}
                    />
                </li>
                <span style={{'color':'red'}}>{loginErrors.number}</span>
                <li>
                    <button type='submit'>send</button>
                </li>
            </ul>
        </form>
    );
}

