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