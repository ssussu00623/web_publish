import React, { useRef, useState } from 'react';
import { validateFormSignup2 } from '../../apis/validate.js';
import { initFormName } from '../../apis/initial.js';

export default function Signup2() {
    // 배열 + reduce() 함수
    const initArray = [
        'id','pass','name','phone1','phone2','phone3','address','birth1','birth2','birth3',
        'job','gender','email','intro'
    ]
    /* 
        const refs2 = refArray.reduce((acc, key)=> {}, 리턴타입)
        >> acc = {} 이렇게 만들어주는 것. 
        acc에 키값을 매겨주어야함 acc[key]이렇게~
        >> acc[key]:useRef(null) 로 만들고 싶다면 {}에 넣는 거니까 =으로 해서 넣어주면 된다.

    */
    // React 전용 useRef함수는 custom hook 등을 활용
    const reftArray =['idRef','passRef', 'nameRef', 'phone1Ref','phone1Ref',
        'phone2Ref','phone3Ref','addressRef','birth1Ref','birth2Ref',
        'birth3Ref','jobRef','genderRef','emailRef','introRef']
    // const ref2 = initArray.reduce((acc, key)=> {
    //     acc[key]=useRef(null)
    //     return acc;
    // }, {});
    
    // const init = initArray.reduce((acc, key)=> {
    //     acc[key] = '';
    //     return acc;
    // }, {});

    // console.log(init2);
    
    const refs = {
        idRef:useRef(null),
        passRef:useRef(null),
        nameRef:useRef(null),
        phone1Ref:useRef(null),
        phone2Ref:useRef(null),
        phone3Ref:useRef(null),
        addressRef:useRef(null),
        birth1Ref:useRef(null),
        birth2Ref:useRef(null),
        birth3Ref:useRef(null),
        jobRef:useRef(null),
        genderRef:useRef(null),
        emailRef:useRef(null),
        introRef:useRef(null),
    }
    // const init ={
    //     'id':'','pass':'','name':'','phone1':'','phone2':'','phone3':'','address':'','birth1':'','birth2':'','birth3':'',
    //     'job':'','gender':'','email':'','intro':''
    //     // 처음 화면에서 빈 값으로 보여줄거임
    // } 
    console.log(initArray);
    
    const [formData, setFormData]= useState(initFormName(initArray))
    const hadleChangeForm = (event)=> {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value})
    }
    const handleSubmit = (event)=> {
        event.preventDefault();
        if(validateFormSignup2(refs))console.log(formData);
    }

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <span>아이디:</span>
                        <input 
                        type="text" 
                        name='id'
                        value={formData.id}
                        ref={refs.idRef}
                        onChange={hadleChangeForm}
                        // 값을 꺼낼 때 폼데이터 안의 아이디처럼 객체 형태로 레퍼런스한다
                        // 값이 변할 때마다 핸들 체인지를 통해 폼 데이터 값도 변하게 된다.
                        />
                    </li>
                    <li>
                        <span>비밀번호:</span>
                        <input 
                        type="password" 
                        name='pass'
                        value={formData.pass}
                        ref={refs.passRef}
                        onChange={hadleChangeForm}
                        />
                    </li>
                    <li>
                        <span>이름:</span>
                        <input 
                        type="text" 
                        name='name'
                        value={formData.name}
                        ref={refs.nameRef}
                        onChange={hadleChangeForm}
                        />
                    </li>
                    <li>
                        <span>전화:</span>
                        <input 
                        type="number" 
                        name='phone1'
                        value={formData.phone1}
                        ref={refs.phone1Ref}
                        onChange={hadleChangeForm}
                        /> -
                        <input 
                        type="number" 
                        name='phone2'
                        value={formData.phone2}
                        ref={refs.phone2Ref}
                        onChange={hadleChangeForm}
                        /> -
                        <input 
                        type="number" 
                        name='phone3'
                        value={formData.phone3}
                        ref={refs.phone3Ref}
                        onChange={hadleChangeForm}
                        /> 
                    </li>
                    <li>
                        <span>주소</span>
                        <input 
                        type="text" 
                        name='address'
                        value={formData.address}
                        ref={refs.addressRef}
                        onChange={hadleChangeForm}
                        />
                    </li>
                    <li>
                        <span>생일</span>
                        <input 
                        type="number" 
                        name='birth1'
                        value={formData.birth1}
                        ref={refs.birth1Ref}
                        onChange={hadleChangeForm}
                        /> /
                        <input 
                        type="number" 
                        name='birth2'
                        value={formData.birth2}
                        ref={refs.birth2Ref}
                        onChange={hadleChangeForm} 
                        /> /
                        <input 
                        type="number" 
                        name='birth3'
                        value={formData.birth3}
                        ref={refs.birth3Ref}
                        onChange={hadleChangeForm}
                        /> 
                    </li>
                    <li>
                        <span>직업</span>
                        <select 
                        name="job" 
                        ref={refs.jobRef}
                        onChange={hadleChangeForm}>
                        <option value="default">---</option>
                        <option value="frontend">프론트개발자</option>
                        <option value="backend">백엔드개발자</option>
                        <option value="system">시스템관리자</option>
                        </select>
                    </li>
                    <li>
                        <span>성별</span>
                        <input 
                            type="radio" 
                            name='gender' 
                            ref={refs.genderRef}
                            value="m"
                            onChange={hadleChangeForm}/>남
                        <input 
                            type="radio" 
                            name='gender' 
                            ref={refs.genderRef}
                            value="f"
                            onChange={hadleChangeForm}/>여
                        <input 
                            type="radio" 
                            name='gender' 
                            ref={refs.genderRef}
                            value="n"
                            onChange={hadleChangeForm}/> 공개하지않음
                    </li>
                    <li>
                        <span>이메일</span>
                        <input 
                        type="text" 
                        name='email'
                        value={formData.email}
                        ref={refs.emailRef}
                        onChange={hadleChangeForm}
                        />
                    </li>
                    <li>
                        <span>자기소개</span>
                        <textarea rows='10' cols='50'
                        name='intro'
                        value={formData.intro}
                        ref={refs.introRef}
                        onChange={hadleChangeForm}
                        />
                    </li>
                    <li>
                        <button type='submit'
                        >회원가입</button>
                        <button type='reset'
                        >취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

