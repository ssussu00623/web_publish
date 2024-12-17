/***
 * signup error check 
 */

// export const ErrorCheckSignup=(name, value, errors, setErrors)=>{

//     // 프로퍼티 값을 받아야 쓸 수 있다! 
//     if(name === 'id'){
//         (value === '')?setErrors({...errors,['id']:'아이디를 입력해주세요.'})
//         : setErrors({...errors,['id']:''});
//     } else if(name === 'pwd'){
//         (value === '')?setErrors({...errors,['pwd']:'비밀번호를 입력해주세요'})
//         : setErrors({...errors,['pwd']:''});
//     } else if(name === 'cpwd'){
//         (value === '')?setErrors({...errors,['cpwd']:'비밀번호를 입력해주세.'})
//         : setErrors({...errors,['cpwd']:''});
//     } else if(name === 'name'){
//         (value === '')?setErrors({...errors,['name']:'이름을 입력해주세요.'})
//         : setErrors({...errors,['name']:''});
//     } else if(name === 'phone'){
//         (value === '')?setErrors({...errors,['phone']:'번호를 입력해주세요.'})
//         : setErrors({...errors,['phone']:''});
//     } else if(name === 'emailName'){
//         (value === '')?setErrors({...errors,['emailName']:'이메일 주소 를 입력해주세요.'})
//         : setErrors({...errors,['emailName']:''});}
//     }

    // 이렇게 할 수도 있지만..

    /*
    이렇게 할 수도있지만.. 효율적으로 사용하기 위해 
    리스트를 만들어 map으로 돌릴 수 있음.
    다 문자기 때문에 가능한 것
     */

    export const errorCheckSignup=(name, value, errors, setErrors)=>{
        const names = [
            {'name':'id', 'msg': '아이디를 입력해주세요'},
            {'name':'pwd', 'msg': '비밀번호를 입력해주세요'},
            {'name':'cpwd', 'msg': '비밀번호 확인을 입력해주세요'},
            {'name':'name', 'msg': '이름을 입력해주세요.'},
            {'name':'phone', 'msg': '번호를 입력해주세요'},
            {'name':'emailName', 'msg': '이메일 주소를 입력해주세요'}
        ]
        // 이것도 제이슨 데이터에 넣고 사용할 수 있음. 
        names.map(item =>
        // 자바스크립트라 {}없이 돌릴 수 있음
            (item.name === name)? (
                (value === '')?setErrors({...errors,[item.name]:item.msg})
                : setErrors({...errors,[item.name]:''})
            ) : ''
        );
        };

/***
 * signup error check 
 */

    export const errorCheckLogin=(name, value, loginErrors, setLoginErrors)=>{
        const list = [
            {'name':"id", 'msg':'아이디를 입력해주세요.'},
            {'name':"pwd", 'msg':'비밀번호를 입력해주세요.'},
            {'name':"name", 'msg':'이름을 입력해주세요.'},
            {'name':"address", 'msg':'주소를 입력해주세요.'},
            {'name':"number", 'msg':'번호를 입력해주세요.'},
        ]
        list.map(item=>
        (item.name===name)?(
            (value==='')?setLoginErrors({...loginErrors,[item.name]:item.msg})
            : setLoginErrors({...loginErrors,[item.name]:''})
            ) : ''
        );
    }