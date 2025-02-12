import * as repository from '../repository/productRepository.js'

/**
 * 상품 등록
 */

export const registerProduct = async(req, res)=> {
    //바디를 통해 받아야함 ~! 
    console.log('req.body===>', req.body);
    const result = await repository.registerProduct(req.body); //레파지토리 함수 
    res.json(result);
    res.end();
}
/**
 * 전체 상품 리스트 조회
 */
export const getList = async(req, res)=>{
    const result = await repository.getList();
    res.json(result);
    res.end();
}

/**
 * 상품 상세 정보 조회 
 */
export const getProduct = async(req, res)=> {
    // console.log('req.body====>', req.body);
    const result = await repository.getProduct(req.body.pid); 
    // 전체 정보가 아니라 pid를 끌고와서 출력하는 것
    // req.body만 받으면 {"pid": pid} 이렇게 넘어와서 pid를 지정하여 pid = 3인 변수 형태로 넘어온다.  
    res.json(result);
    res.end();
}

/**
 * 카트에 아이템 추가
 */

export const getcartitems = async(req, res)=> {
    console.log('pids===>',req.body);
    const result = await repository.getcartitems(req.body);
    res.json(result);
    res.end();
}