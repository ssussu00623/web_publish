import { db } from './db.js';

export const getOrderList = async ({ id }) => {
    //뷰 생성 전
    // const sql = `
    //     select sc.cid,
    //     sc.size,
    //     sc.qty,
    //     sm.id,
    //     sm.name,
    //     sm.phone,
	// 	concat(sm.emailname, '@', sm.emaildomain) as email,
    //     sm.zipcode,
    //     sm.address,
    //     sp.pid,
    //     sp.pname,
    //     sp.price,
    //     sp.description as info,
    //     concat('http://localjhost:9000/', sp.upload_file->> '$[0]') as image
    // from shoppy_cart sc,
    //     shoppy_member sm,
    //     shoppy_product sp
    // where sc.id = sm.id 
    // and sc.pid = sp.pid 
    // and sm.id = ?;
    // `
    const sql = `
        select * from view_order_list
	    where id = ? ;
    `
    const [result] = await db.execute(sql, [id]);
    return result;
}

export const add = async(formData)=>{
    console.log('add:orderList', formData.orderList);
    
    const result = await Promise.all(
        formData.orderList.map(async (item) => {
            const values = [
                item.size,
                item.qty, 
                formData.totalPrice,
                formData.type,
                formData.tid, 
                formData.id, 
                item.pid
            ];
            console.log(values);
            
            const sql = `
            insert into shoppy_order(size, qty, tprice, type, tid, id, pid, odate)
            values(?, ?, ?, ?, ?, ?, ?, current_date())
            `;
            const [result] = await db.execute(sql, values); //Promise형태로 실행
            return result.affectedRows; 
        })
    )
    const result_rows = result.reduce((acc, cur)=> acc + cur, 0);
    return {"result_rows": result_rows};
}