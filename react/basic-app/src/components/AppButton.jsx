import { useEffect, useState } from 'react'
import Button from'./Button.jsx'
import ButtonList from'./ButtonList.jsx'

export default function AppButton(){
    const [propsList,setpropsList] = useState([]);
    useEffect(()=>{
        fetch("data/button_names.json")
        .then(data=> data.json) //안에서만 활성되는 값이라 꼭 result가 아니어도 됨
        .then(json=> setpropsList(json))
        .catch();
    }, []);
    return(
        <>
        <div style={{display: 'flex'}}>
            <Button name="All" type= "Button" />
            <Button name="Front-end" type= "Button" />
            <Button name="Back-end" type= "Button" />
            <Button name="Mobile" type= "Button" />
            <Button name="Submit" type= "submit" />
            <Button name="Reset" type= "reset" />
        </div>
        <div>
            <div style={{display:'flex'}}>
                <ButtonList list = {propsList} />
            </div>
        </div>
        </>
    )
}
// 사용은 태그처럼 생성은 자바스크립트 함수처럼. 꼭기억.