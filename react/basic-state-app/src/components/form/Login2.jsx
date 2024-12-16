import React, { useRef, useState } from 'react';
import { validateLogin2 } from '../../apis/validate.js';

export default function Login2() {
    const idRef = useRef(null)
    const passRef = useRef(null)
    const initForm={'id':'', 'pass':''}
    const [errorMsg, setErrorMsg] = useState({'id':'', 'pass':''})
    const[formData, setFormData] = useState(initForm)
    const handleChangeForm=(event)=> {
        const {name, value} = event.target;
        setFormData({...formData,[name]:value})
        if(name==='id') {
            (value === '')?setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'})
            : setErrorMsg({...errorMsg, ['id']:''})
        } else if (name ==='pass'){
            (value === '')?setErrorMsg({...errorMsg, ['pass']:'패스워드를 입력해주세요'})
            : setErrorMsg({...errorMsg, ['pass']:""})
        }
            //객체 자체를 가져오는게 아니라 안의 데이터 값을 가져오겠다는 것..
    }

    // const validate = ()=>{
    //     let result = true;
    //     if(idRef.current.value === ''){
    //         // alert("아이디를 입력해주세요")
    //         setErrorMsg({...errorMsg, ['id']:'아이디를 입력해주세요'})
    //         idRef.current.focus();
    //         result = false;
    //     } else if(passRef.current.value === ''){
    //         // alert("패스워드를 입력해주세요.")
    //         setErrorMsg({...errorMsg, ['pass']:"패스워드를 입력해주세요."})
    //         passRef.current.focus();
    //         result = false;
    //     } 
    //     return result;
    // }

    const handleSubmit = (e) => {        
        e.preventDefault();
        const param = {
            'idRef': idRef,
            'passRef':passRef,
            'errorMsg':errorMsg,
            'setErrorMsg':setErrorMsg
        }
        if(validateLogin2(param)) console.log(formData);
    }
    
    return (
            <form action="login-Form" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디 </label>
                        <input type="text" 
                        name='id'
                        value={formData.id}
                        ref={idRef}
                        onChange={handleChangeForm}/>
                    <span style={{'color':'red'}}>{errorMsg.id}</span>
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password"
                        name='pass'
                        ref={passRef}
                        value={formData.pass}
                        onChange={handleChangeForm}/> 
                    <span style={{'color':'red'}}>{errorMsg.pass}</span>
                    </li>
                    <li>
                        <button type='submit'>로그인</button>
                    </li>
                    </ul>
            </form>
    );
}

