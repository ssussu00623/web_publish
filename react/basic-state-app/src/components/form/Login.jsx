import React, { useRef, useState } from 'react';

export default function Login() {
    // const [id, setId]= useState('');
    // const [password, setPassword]=useState('');
    const idRef = useRef(null) //객체의 이니셜 값이 들어감
    const passwordRef = useRef(null) //객체의 이니셜 값이 들어감

    const initForm={'id':'', 'password':''}
    const [form, setForm] = useState(initForm); //{"id":"test"...} id, pwd각각 할 수 있지만! 이렇게 만들어서 직접 처리한다는 뜻
    // 입력된 정보가 id 값의 name, password 값의 name 이 된다.
    const handleChangeForm=(event)=>{
        // console.log(event.target); 
        const {name, value} = event.target;
        //아이디, 패스워드가 변경되면 setForm 함수를 사용하여 "id":"test" 형식으로 저장
        // console.log(`name===> ${name}, ${value}`);
        // setForm({name:value}); 
        // 스프레드 연산자를 활용하여...
        // form = {'id':'hong', 'password':''} < --id 입력시 실행
        // form = {'id':'hong', 'password':'1234'} < --id 입력시 실행
        setForm({...form, [name]:value}); 
        //오브젝트 객체의 필드값을 변수로 입력하는 경우에는 []로 감싼후 적용한다.
        
    }
    // const hadleChangeId = (event)=> {
    //     setId(event.target.value);
    //     console.log(event.target.value);
    //     //event로 받는 건 (()안의 값이 뭐든) input되는 값이 있기때문에 받는 값을 정해두는것
    //     // 이벤트를 주지 않으면 리액트가 아니라 브라우저가 처리하기 때문에.. 관계 설정을 잘 해둬야 함
    // }
    // const hadleChangepwd = (event) => {
    //     setPassword(event.target.value);
    //     console.log(event.target.value);
    // }
    const validate=()=>{
        let result = true;
        if(idRef.current.value === ''){
            alert(`아이디를 입력하세요`)
            idRef.current.focus();
            // return false;
            result = false
        } else if(passwordRef.current.value==='') {
            alert(`패스워드를 입력하세요.`)
            passwordRef.current.focus();
            // return false;
            result = false
        } 
        // else {
        //     return true;
        // }
        return result;
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        //브라우저에서 실행하는 걸 막기!
        if(validate()){
            // console.log(form);
        }
        console.log(form);
        //로그인 폼에 입력된 값을 ---> 서버에 넘긴다. (백앤드에 넘긴다. express, WAS, C#등)
        // {오브젝트리터럴} 형태로 싸여 넘어간다. 폼 전체가 넘어가는 것. 
        // {{"id":"test, "password":"1234"}... 등}
        // const formData = {
        //     "id":"test"
        //     "password":"1234" 이렇게 넘기기위해 useState를 사용하기
        // } js일 경우 props랑 똑같다.. 키 값을 받는 거니까 구조분해할당으로 데이터를 전송 할 수 있음.  
        // submit(form); db연동시 이러면 폼의 정보값이 저장됨 현재는 쓸 수 없어서 주석처리!
    }
    return (
        <div>
            <h1>Login</h1>
            <form action="ligin-form" onSubmit={handleSubmit}>
                {/* 버튼이 아니라 폼에서주어야 함.. 
                서버에 연동되는 폼은 폼에 인풋타입으로 만들어주고 
                값이 바뀔 때마다 값을 받을 수 있게 함수를 주고...*/}
                <div>
                <lable>아이디</lable>
                <input type="text" 
                        name="id" 
                        // value={id} 
                        value={form.id} 
                        ref={idRef}
                        // onChange={hadleChangeId}
                        onChange={handleChangeForm}
                        />
                </div>
                <div>
                <lable>패스워드</lable>
                <input type="password" 
                        name="password" 
                        ref={passwordRef}
                        // value={password} 
                        value={form.password} 
                        // onChange={hadleChangepwd}
                        onChange={handleChangeForm}
                        />
                </div>
                <div>
                    <button type='submit' >로그인</button>
                    {/* 서버 전송을 위해서는 submit으로 ~ */}
                </div>
            </form>
        </div>
    );
}

