export const validateLogin=(refs)=>{
    let result = true
    if(refs.idRef.current.value === ''){
        alert('아이디를 입력하세여')
        refs.idRef.current.focus()
    } else if(refs.pwdRef.current.value === ''){
        alert('비밀번호를 입력하세요')
        refs.pwdRef.current.focus()
    }
    return result;
}

export const validateSignup=(refs, msgrefs)=>{
    const refList = Object.entries(refs);
    const msgList = Object.entries(msgrefs);

    console.log(refList);
    console.log(msgList);
    
    
    for(let i=0; i<refList.length; i++){
    const item = refList[i];
    const msgItem = msgList[i];
    const name = item[0];
    const ref = item[1]
    const msgName = msgItem[0];
    const msgRef = msgItem[1]; ;
        if(name !== 'emaildomainRef'){
            if(ref.current.value=== ''){
                msgRef.current.style.setProperty('color','red')
                ref.current.focus()
                return false;
            }
        } else {
            if(ref.current.value === 'default'){
                alert('이게 아니다')
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}