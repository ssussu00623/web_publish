import * as repository from '../repository/memberRepository.js'
import jwt from 'jsonwebtoken';

/**
 * 회원가입 registerMember()
 * 
 * export const registerMember=(req, res, next)=>{}
 * 이건 이 함수가 실행된 후 다음 함수가 실행되도록 하는 거지만...자주 사용하지 않음
 */

export const registerMember = async(req, res)=> {
    // console.log('req.body===>', req.body );
    // req.body = 폼 데이터 라는 것 (signup.jsx)
    const result = await repository.registerMember(req.body);
    res.json(result);
    res.end();
    // DB연동은 무조건 시간이 오래 걸리는 비동기식임 그래서 함수 앞에 async와 await 를 붙여 이게 먼저 실행된 후 다른 것들이 실행될 수 있도록 한다.
    // await가 붙으면 무조건 비동기식이고... 이게 실행된 후 다른게 실행된다는 걸 알아야함
    // 안 붙어있다면 데이터가 넘어가기 전에 다른 것들이 실행되기 때문에 데이터가 null값이 되니 주의 
    // 헷갈린다면 const formData = req.body로 선언하고 활용해도 됨
}

/** 아이디 중복체크 : getIdCheck */
export const getIdCheck = async(req, res) =>{
    console.log('id==>', req.body);
    const result = await repository.getIdCheck(req.body);
    res.json(result)
    res.end(); 
}

/**
 * 로그인 체크 
 */
export const checkLogin = async(req, res)=>{
    // console.log(req.body);
    let result = await repository.checkLogin(req.body); // result = {result_rows:1} or {result_rows:0} 

    if(result.result_rows === 1){
    // jwt 토큰 생성 및 result 객체에 추가해야한다. (토큰과 함께 리액트로 넘겨야하니까)
    // 추가 전송 : {result_rows : 1,  tocken : ~~~~tocken값}
    //https://www.randomkeygen.com/
        const token = jwt.sign({"userId" : req.body.id}, 'ti96A2lqFU'); // 토큰 값을 여기서 만들어주고...
        result = {...result, "token" : token} // 추가해서 붙이고 보낼 수 있도록 
        console.log(result); 
    }
    res.json(result)
    res.end();
}   