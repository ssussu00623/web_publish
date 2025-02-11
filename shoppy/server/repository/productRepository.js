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
        formData.price || 0,
        formData.description || "",
        formData.uploadFile || null,
        formData.sourceFile || null
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
            concat('http://localhost:9000/', upload_file->>'$[0]') as image,
            source_file,
            pdate
        from shoppy_product 
    `;
    // concat('http://localhost:9000/', upload_file) as image, <- 데이터 타입이 json이 아닌 경우에만 활용 ~ 
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

export const getProduct = async(pid)=>{
    console.log('pid===>', pid);
    const sql = `
    select 	pid,
		pname as name,
        price,
        description as  info,
        upload_file as uploadFile, 
        source_file as sourceFile, 
        pdate,
        concat('http://localhost:9000/', upload_file->>'$[0]') as image,
        json_array(
			concat('http://localhost:9000/', upload_file->>'$[0]'),
            concat('http://localhost:9000/', upload_file->>'$[1]'),
            concat('http://localhost:9000/', upload_file->>'$[2]') 
        ) as imgList,
        json_arrayagg(
			concat('http://localhost:9000/', jt.filename)
            ) as detailImgList
	from shoppy_product, 
			json_table (shoppy_product.upload_file, '$[*]' 
				columns (filename varchar(100) path '$') ) as jt  
    where pid = ?
    group by pid;
    `
    const [result] = await db.execute(sql, [pid]); 
    // 지정한 pid값을 여기서 받아서 정보를 출력 하도록 ~ 이게 나올 때까지 await한 것 
    // [{pid:4, ~~}], [컬럼명 filed] MySQL에서 셀렉트를 하게 되면 2차원 배열로 출력된다. 
    console.log('result===>', result[0]);
    
    return result[0];
    
}