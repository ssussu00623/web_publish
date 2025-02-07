import { db } from "./db.js";

/**
 * 상품 등록
 */
export const registerProduct= async(formData)=>{
    const sql = `
        insert into shoppy_product(pname, price, description, upload_file, source_file, pdate)
        values (?,?,?,?,?,now())
    `;
    const values = [
        formData.productName,
        formData.price,
        formData.description,
        formData.uploadFile,
        formData.sourceFile
        // 이름, 순서에 유의! 
    ];
    const [result] = await db.execute(sql, values);
    return{"result_rows" : result.affectedRows};
    // 토큰 때처럼 결과가 1이면 true
}

export const getList = async()=>{
    const sql = `
        select 
            pid,
            pname as name, 
            price,
            description as info,
            concat('http://localhost:9000/', upload_file) as image,
            source_file,
            pdate
        from shoppy_product 
    `;
    const [result] = await db.execute(sql);
    console.log('result===>', result);
    
    return result;
}

/**
 * 
 * execute 하면...
 * DB파일(MySQL)의 정보값이 
 * [
 *  [{	1	키보드	123	123	upload_files\1738906568300-319292641-3.webp	3.webp	2025-02-07 14:36:09}, {}, {}],
 *  [pid, pname...]
 * ]
 * ...이렇게 json으로 리턴해온다. 이 결과값 중 1번째 값만 result로 가져오게 된다. 
 */