/************************
 * title : 로그인 폼 체크
 * *********************/
    /*validate 함수 */
    export const validateLogin =({idRef, pwdRef}, {msgRef})=>{
        let result = true;

        if(idRef.current.value === ''){
            // alert('아이디를 입력해주세요')
            msgRef.current.style.setProperty('color','red');
            idRef.current.focus();
            result = false;
        } else if(pwdRef.current.value === ''){
            // alert('패스워드를 입력해주세요')
            msgRef.current.style.setProperty('color','red');
            pwdRef.current.focus();
            result = false;
        } else {
            msgRef.current.style.setProperty('color','white');
        }
        return result;
    }
/************************
 * title : 회원가입 폼 체크
 * *********************/
    /*validate 함수 */
export const validateSignup=(refs, msgRefs)=>{
    // console.log('f-refs->>', refs);
    // console.log('f-msgrefs->>', msgrefs);
    
    const refEntries= Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);

    console.log(refEntries);
    console.log(msgRefEntries);

        for(let i=0; i<refEntries.length; i++) {
            const item = refEntries[i];        
            const name = item[0];
            const ref = item[1];    // 데이터 입력폼 객체 주소
        // 0번지부!터! 해당하는 배열값을 가지고 오려는 것 
        // i번지 부!터! 해당하는 name값을 가지고 오려는 것 
        // i번지 부!ㄴ터! 해당하는 데이터 입력 폼 객체 주소값을 가지고 오려는 것 
        let msgItem, msgName, msgRef = null;
        if(i<refEntries.length-1) {
            msgItem = msgRefEntries[i];
            msgName = msgItem[0];
            msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소 
        }

        // 해당하는 데이터 입력 폼 메세지 객체 주소값을 가지고 오려는 것 
        /*
        const refEntries = [
            ['idRef'(이게 i의 item의 0번지), {....}(이게 i의 item의 1번지)]
            ['pwdRef', {....}]
            ] */
        if(name !== 'emaildomainRef'){//''로 체크... 도메인만 value값으로 체크하니까 미리 빼고 돌리기
            if(ref.current.value === ''){
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            }
        } else { // 'default' 로 체크
            if(ref.current.value === 'default'){
                alert('이메일 주소를 선택해주세요~')
                ref.current.focus();
                return false;
                }
            }
        } 
        return true;

//Entri를 사용하면 
// map, forEach...를 사용할 수 없다 일반 for문이나 for of를 사용해야한다
// 우린 같은 인덱스가 필요한 경우를 하고 있기 때문에 일반 for문을 사용한다
// ==> refEntries 배열 객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다.
/*
let result = true;
if(refs.idRef.current.value === ''){
        msgRefs
        refs.idRef.current.focus();
        result = false;
        } else if(refs.pwdRef.current.value === ''){
            alert('비밀번호를 입력하세요')
            refs.pwdRef.current.focus();
        result = false;
        } else if(refs.cpwdRef.current.value === ''){
            alert('비밀번호 확인을 입력해주세요')
            refs.cpwdRef.current.focus();
            result = false;
            } else if (refs.nameRef.current.value === ''){
                alert('이름을 입력해주세요')
                refs.nameRef.current.focus();
                result = false;
                } else if (refs.phoneRef.current.value === ''){
                    alert('번호를 입력해주세요')
                    refs.phoneRef.current.focus();
                    result = false;
                    } else if (refs.emailnameRef.current.value === ''){
                        alert('이메일네임을 입력해주세요')
                        refs.emailnameRef.current.focus();
                        result = false;
                        }else if (refs.emaildomainRef.current.value === 'default'){
                            alert('이메일도매인을 선택해주세요')
                            refs.emaildomainRef.current.focus();
                            result = false;
                            }
                            return result;
                            */
}
export const handleDuplicateIdCheck=(idRef, idMsgRef, pwdRef, setIdCheckResult)=>{
    // 구조분해 할당으로 받을 수 없어서 (current값이라) 변수로 받을 때  
    // 할당된 순서대로 받기 때문에 맵핑을 순서대로 해야함(사랑의 짝대기처럼)
    if(idRef.current.value === ''){
        idMsgRef.current.style.setProperty('color', 'red')
        idRef.current.focus();
        return false;
    } else{
        const did = 'test'; //  DB연동 전 
        if(idRef.current.value === did){
            alert('이미 사용중인 아이디입니다.')
            idRef.current.focus();
            return false;
        } else {
            alert('사용 가능한 아이딥니다.')
            // idCheckResult.current.value = "complete"
            setIdCheckResult("complete");
            pwdRef.current.focus();
            return false;
        }
    }
    };
/**********************************
 * 비밀번호 체크
 **********************************/
export const handlePasswordCheck=(pwdRef, cpwdRef, nameRef, pwdMsgRef, cpwdMsgRef)=>{
    // const pwdRef = refs.current["pwdRef"];
    // const cpwdRef = refs.current["cpwdRef"];
    // const pwdMsgRef = msgRefs.current["pwdMsgRef"];
    // const cpwdMsgRef = msgRefs.current["cpwdMsgRef"];
    if(pwdRef.value === ""){ 
        pwdMsgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        return false;
    } else if(cpwdRef.value === ""){
        cpwdMsgRef.current.style.setProperty('color', 'red');
        cpwdRef.current.focus();
        return false;
    } else {
        if(pwdRef.current.value === cpwdRef.current.value){
            alert('password true')
            nameRef.current.focus();
            return false;
        } else {
            alert('error')
            pwdRef.current.value = "";
            cpwdRef.current.value = "";
            cpwdRef.current.focus();
            return false;
        }
    }
}