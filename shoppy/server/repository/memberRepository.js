import {db} from './db.js'
// db연동할 때만 ~ 이렇게 사용 

/**
 * 회원가입 - insert
 */
export const registerMember = async(formData) =>{
// req.body로 보내는 값이 결국 폼 데이터이기 때문에... 폼 데이터로 받는다. 
    // 1. 연동할 SQL 생성
    const sql = `
    insert into shoppy_member(id, pwd, name, phone, emailname, emaildomain, zipcode, address, mdate)
                values(?,?,?,?,?,?,?,?, now())
    `;
    // 입력하는 값마다 계속 값이 입력되는 폼이기 때문에~(회원가입이라) 물음표로 맵핑한다
    const values = [
        formData.id, 
        formData.pwd, 
        formData.name, 
        formData.phone, 
        formData.emailname, 
        formData.emaildomain,
        null,
        null
    ];
    // 물음표 값들과 순서를 꼭 맞춰야함!! 데이터만 들어가는 자리이기 때문에 가입시간을 나타내는 now()는 const sql에서 주어야 함 여기가 XX
// 2. db객체를 이용하여 SQL 실행 후 결과 가져오기 
    const [result, fields] = await db.execute(sql, values);
    // console.log(result);
    // console.log(fields);
    //registerMember에 붙은 async가 여기에서 연동
// 3. 결과값 리턴 
    return {"result_rows": result.affectedRows};
    // 리액트는 json타입으로 데이터를 받기 때문에 보내주기도 이렇게 보내주어야 함
}

/**
 * 아이디 중복체크 - select 
 * 
 */
export const getIdCheck = async({id})=>{
    const sql = `select count(id) as result from shoppy_member where id = ?;`; 
    const [result, fields] = await db.execute(sql, [id]) 
    return result[0];
}

/**
 * 로그인
 * 기본 틀::
 *  export const checkLogin = async({id, pwd})=> { // {id: 'test', pwd: '1234'}
    const sql = ``; 
    const result = await db.execute();
    return '';
}
*/
export const checkLogin = async({id, pwd})=> { // {id: 'test', pwd: '1234'}
    const sql = `
    select count(*) as result_rows from shoppy_member
	where id = ? and pwd = ?;
    `;  // mysql에서 하던 것 
    // 물음표의 값 순서가 매우 중요. id가 먼저 나왔으니 첫 물음표도 무조건 id와 연결된다.
    const [result] = await db.execute(sql, [id, pwd]);
    // 2차원 배열인 [[], []]이렇게 출력되고... 첫번째인 []를 result로 받는다... id, pwd는 {}로 받아 이름을 붙인 것과 다르게 result에도 []를 씌움
    return result[0];
    // [{result_rows : 1}]만 넘어갈 수 있게 0번지를 준다.
}


/*
export const getIdCheck = async(idData)=>{ //{ id: 'test' }로 넘어오는 걸 알고 있고.. 객체를 구조분해할당으로 받아 async({id})로도 받을 수 있다.
    const sql = `select count(id) as result from shoppy_member where id = ?;`; //외우기  ! !  count로 받는 것 
    const [result, fields] = await db.execute(sql, [idData.id])
                                    //idData는 { id: 'test' } 타입이니 []로 받아준다
    // console.log('result===>', result[0]);
    
    return result[0];
}
    */