/**
 * 
 * @returns 
 */

export const validate = (param)=>{
    let result = true;
    if(param.refs.idRef.current.value === ''){
        param.setErrors({...param.errors, ['id']:'아이디를 입력해주세요'})
        param.refs.idRef.current.focus();
        result = false;
    } else if(param.refs.pwdRef.current.value === ''){
        param.setErrors({...param.errors, ['pwd']:"패스워드를 입력해주세요."})
        param.refs.pwdRef.current.focus();
        result = false;
    } 
    return result;
}


/**
 * Login2 컴포넌트
 */

export const validateLogin2 = (param)=>{
    let result = true;
    if(param.idRef.current.value === ''){
        // alert("아이디를 입력해주세요")
        param.setErrorMsg({...param.errorMsg, ['id']:'아이디를 입력해주세요'})
        param.idRef.current.focus();
        result = false;
    } else if(param.passRef.current.value === ''){
        // alert("패스워드를 입력해주세요.")
        param.setErrorMsg({...param.errorMsg, ['pass']:"패스워드를 입력해주세요."})
        param.passRef.current.focus();
        result = false;
    } 
    return result;
}

/**
 * 
 * User Info
 */

export const validateForm = (refs) =>{
    let result = true;
    if(refs.nameRef.current.value  === ''){
        alert(`이름이 없어요!`)
        refs.nameRef.current.focus();
        result = false;
    } else if (refs.addressRef.current.value  === ''){
        alert(`주소가 없어요!`)
        refs.addressRef.current.focus();
        result = false;
    } else if (refs.ageRef.current.value  === ''){
        alert(`나이가 없어요 없어요!`)
        refs.ageRef.current.focus();
        result = false;
    }
    return result;
}

/***
 * validateSignup
 * signup 컴포넌트의 유효성 체크
 */

export const validateSignup =(refs, erros, setErrors)=>{
    console.log(refs);
    let checkResult = true;
    if(refs.idRef.current.value === ''){
        refs.idRef.current.focus();
        setErrors({...erros, ['id']:'아이디를 입력해주세요'});
        // refs.idRef.current.style.setProperty('color','red')
        // 이건프로퍼티 값에 사용할 수 있을 때.... 우리의 span은 밖에 있어서 못쓴다.
        checkResult = false;
    } else if(refs.pwdRef.current.value === ''){
        // alert(`비밀번호를 입력해주세요.`)
        setErrors({...erros, ['pwd']:'비밀번호를 입력해주세요'});
        refs.pwdRef.current.focus();
        checkResult = false;
    } else if(refs.cpwdRef.current.value === ''){
        // alert(`비밀번호 확인을 다시 입력해주세요.`)
        setErrors({...erros, ['cpwd']:'비밀번호 확인을 입력해주세요'});
        refs.cpwdRef.current.focus();
        checkResult = false;
    } else if(refs.nameRef.current.value === ''){
        // alert(`이름이 없어요!`)
        setErrors({...erros, ['name']:'이름을 입력해주세요'});
        refs.nameRef.current.focus();
        checkResult = false;
    } else if(refs.phoneRef.current.value ===''){
        // alert(`번호가 없어요!`)
        setErrors({...erros, ['phone']:'번호를 입력해주세요'});
        refs.phoneRef.current.focus();
        checkResult = false;
    }else if(refs.emailNameRef.current.value ===''){
        // alert(`이메일이 없어요!`)
        setErrors({...erros, ['emailName']:'번호를 입력해주세요'});
        refs.emailNameRef.current.focus();
        checkResult = false;
    }else if(refs.emailDomainRef.current.value ==='default'){
        // alert(`이메일 도메인을 선택하세요!!`)
        refs.emailDomainRef.current.focus();
        checkResult = false;
    }
    return checkResult;
}

/**
 * 
 * Login
 */

export const validateLogin3 =(refs, loginErrors, setLoginErrors)=>{
    let loginResult = true;
    console.log(refs);
    if(refs.idRef.current.value === ''){
        setLoginErrors({...loginErrors, ['id']:'아이디를 입력해주세요.'})
        refs.idRef.current.focus();
        loginResult = false
    } else if(refs.pwdRef.current.value === ''){
        setLoginErrors({...loginErrors, ['pwd']:'비밀번호를 입력해주세요'})
        refs.pwdRef.current.focus();
        loginResult = false
    } else if(refs.nameRef.current.value === ''){
        setLoginErrors({...loginErrors, ['name']:'비밀번호를 입력해주세요'})
        refs.nameRef.current.focus();
        loginResult = false
    } else if(refs.addressRef.current.value === ''){
        setLoginErrors({...loginErrors, ['address']:'비밀번호를 입력해주세요'})
        refs.addressRef.current.focus();
        loginResult = false
    } else if(refs.numberRef.current.value === ''){
        setLoginErrors({...loginErrors, ['number']:'비밀번호를 입력해주세요'})
        refs.numberRef.current.focus();
        loginResult = false
    } 
    return loginResult;
}