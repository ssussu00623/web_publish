/**
 * 
 * @returns 
 */

export const validationFormCheck = (param) => {
    let result = true;

    if(param.refs.idRef.current.value === '') {
        // alert("아이디를 입력해주세요");
        param.setErrors({...param.errors, ['id']:'아이디를 입력해주세요'});
        param.refs.idRef.current.focus();
        result = false;
    } else if(param.refs.pwdRef.current.value === '') {
        // alert("패스워드를 입력해주세요");
        param.setErrors({...param.errors, ['pwd']:'패스워드를 입력해주세요'});
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
/**
 * 
 * Signup2
 * 논리적으로 활용하기 위해 map이 아닌 for of를 활용한다.
*/



export function validateFormSignup2(refs){
    // const refvalues = Object.values(refs);
    // const refKeys = Object.keys(refs);
    const refEntries = Object.entries(refs);
    // console.log(refvalues);
    // console.log(refKeys);
    console.log(refEntries);

    const msgs = {
        'idRef':'아이디', 
        'passRef':'패스워드',
        'nameRef':'이름',
        'phone1Ref':'번호 앞자리',
        'phone2Ref':'번호 중간자리',
        'phone3Ref':'번호 뒷자리',
        'addressRef':'주소',
        'birth1Ref':'생년',
        'birth2Ref':'생월',
        'birth3Ref':'생일',
        'jobRef':'직업',
        'genderRef':'성별',
        'emailRef':'이메일',
        'introRef':'자기소개'
    }

    /**!!!!배열.map() or 배열.forEach()함수는 배열객체를 순회하는 것이
     * 목적이므로 if 체크 후 focus가 적용되지 않음 ! ! ! 
     */

    for(const item of refEntries) {
        const name =item[0]
        const ref = item[1]
        if(ref && ref.current.value === ''){
            alert(`${msgs[name]}를 입력해주세요.`)
            ref.current.focus();
            return false;
        }       
    };

    // for(const ref of refvalues){
    //     if(ref.current.value ===''){
    //         alert('아이디')
    //         ref.current.focus();
    //         return false;
    //     }
    // }
    }



/*export function validateFormSignup2(refs){
    let checkResult = true
    if(refs.idRef.current.value ===''){
        alert('아이디 입력');
        refs.idRef.current.focus();
        checkResult = false;
    } else if(refs.passRef.current.value ===''){
        alert('비밀번호 입력');
        refs.passRef.current.focus();
        checkResult = false;
    } else if(refs.nameRef.current.value ===''){
        alert('이름 입력');
        refs.nameRef.current.focus();
        checkResult = false;
    } else if(refs.phone1Ref.current.value ===''){
        alert('번호 앞자리 입력');
        refs.phone1Ref.current.focus();
        checkResult = false;
    } else if(refs.phone2Ref.current.value ===''){
        alert('번호 중간자리 입력');
        refs.phone2Ref.current.focus();
        checkResult = false;
    } else if(refs.phone3Ref.current.value ===''){
        alert('번호 뒷자리 입력');
        refs.phone3Ref.current.focus();
        checkResult = false;
    } else if(refs.addressRef.current.value ===''){
        alert('주소 입력');
        refs.addressRef.current.focus();
        checkResult = false;
    } else if(refs.birth1Ref.current.value ===''){
        alert('생년 입력');
        refs.birth1Ref.current.focus();
        checkResult = false;
    } else if(refs.birth2Ref.current.value ===''){
        alert('생월 입력');
        refs.birth2Ref.current.focus();
        checkResult = false;
    } else if(refs.birth3Ref.current.value ===''){
        alert('생일 입력');
        refs.birth3Ref.current.focus();
        checkResult = false;
    } else if(refs.jobRef.current.value ==='default'){
        alert('직업 선택');
        refs.jobRef.current.focus();
        checkResult = false;
    } else if(refs.genderRef.current.value ==='none'){
        alert('성별선택 입력');
        refs.genderRef.current.focus();
        checkResult = false;
    } else if(refs.emailRef.current.value === ''){
        alert('이메일 입력');
        refs.emailRef.current.focus();
        checkResult = false;
    } else if(refs.introRef.current.value === ''){
        alert('자기소개 입력');
        refs.introRef.current.focus();
        checkResult = false;
    }
    return checkResult
}*/

    // //아이디 중복 체크
    // const handleIdCheck = (idRef, errorCheckSignup,errors,setErrors,idMsgRef) =>{
    //     const id = refs.idRef.current;
    //     if(id.value === ''){
    //         errorCheckSignup('id', id.value, errors, setErrors)
    //     } else {
    //         const did = 'test';
    //         if(did === id.value){ //고정되는 값을 앞에 써주는 게 효율적이다!
    //             setErrors({...errors, ['id']: '이미 사용중인 아이디입니다. 다시 입력해주세요'})
    //             id.focus();
    //         } else {
    //             setErrors({...errors, ['id']: '사용이 가능한 아이디입니다.'})
    //             idMsgRef.current.style.setProperty('color','green')
    //             idMsgRef.current.style.setProperty('font-weight','bold')
    //         }
    //     }
    // }
    
    // //비밀번호 중복 체크
    // const handlePwdCheck =(pwdRef, cpwdRef, errorCheckSignup,errors,setErrors,idMsgRef)=> {
    //     const pwd = refs.pwdRef.current;
    //     const cpwd = refs.cpwdRef.current;
    //     if(pwd.value === ''){
    //         errorCheckSignup('pwd', pwd.value, errors, setErrors)
    //         pwd.focus()
    //     } else if (cpwd.value === ''){
    //         errorCheckSignup('cpwd', cpwd.value, errors, setErrors)
    //         cpwd.focus()
    //     } else {
    //         if (pwd.value  === cpwd.value ){
    //             setErrors({...errors, ['pwd']: '비밀번호가 동일합니다.'})
    //             pwdMsgRef.current.style.setProperty('color','green')
    //             pwdMsgRef.current.style.setProperty('font-weight','bold')
    //         } else {
    //             setErrors({...errors, ['pwd']: '비밀번호가 일치하지 않습니다.'})
    //             refs.pwdRef.current.value = '';
    //             refs.cpwdRef.current.value = '';
    //             refs.pwdRef.current.focus();
    //         }
    //     }
    // }