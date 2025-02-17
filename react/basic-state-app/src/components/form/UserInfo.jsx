import React, { useRef, useState } from 'react';
import { validateForm } from '../../apis/validate';

export default function UserInfo() {
    // const [name, setName] = useState()
    // const [address, SetAddress] = useState()
    const refs = {
        nameRef: useRef(null),
        addressRef: useRef(null),
        ageRef: useRef(null)
    }

    const init ={'name':'','address':'','age':''}
    // const [errorMsg, setErrorMsg] = useState({'name':'','address':'','age':''})
    const [form, setForm] = useState(init);

    const handleChangeForm=(event)=>{
        // console.log(event.target);
        const {name, value} = event.target;
        setForm({...form, [name]:value})
    }

    // const handleChangeName =(event)=>{
    //     setName(event.target.value)
    //     console.log(event);
    // }
    // const handleChangeAddress =(event)=>{
    //     SetAddress(event.target.value)
    //     console.log(event);
    // }
    // const validateForm = () =>{
    //     let result = true;
    //     if(nameRef.current.value  === ''){
    //         alert(`이름이 없어요!`)
    //         nameRef.current.focus();
    //         result = false;
    //     } else if (addressRef.current.value  === ''){
    //         alert(`주소가 없어요!`)
    //         addressRef.current.focus();
    //         result = false;
    //     } else if (ageRef.current.value  === ''){
    //         alert(`나이가 없어요 없어요!`)
    //         ageRef.current.focus();
    //         result = false;
    //     }
    //     return result;
    // }
    const handleSubmit = (e) => {        
        e.preventDefault();
        if(validateForm(refs)) console.log(form);
    }
    return (
        <div>
            <h1>UserInfo</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">Name</label>
                        <input type="text" 
                                name='name'
                                ref={refs.nameRef}
                                value={form.name}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">Address</label>
                        <input type="text" 
                                name='address'
                                ref={refs.addressRef}
                                value={form.address}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label htmlFor="">Age</label>
                        <input type="text" 
                                name='age'
                                ref={refs.ageRef}
                                value={form.age}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <button type='submit'>send</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

