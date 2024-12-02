export async function kmdb(type, value, title){
    const servicekey =`S8R5Q18G2QM4U5UKA922`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&${type}=${value}&title=${title}`;
    url += `&ServiceKey=${servicekey}`;
    
    let api = await fetch(url);
    let jsonData = await api.json();
    
    return jsonData;
} 


/**
 * KMDB API 호출 함수
 */

export async function kmdb(type, value, title){
    const servicekey =`S8R5Q18G2QM4U5UKA922`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&${type}=${value}&title=${title}`;
    url += `&ServiceKey=${servicekey}`;
    // +=으로 자동으로 붙을 수 있게 해줌
    // 이 경우 const는 재할당이 안 되기 때문에 let으로 주어야함
    let api = await fetch(url);
    let jsonData = await api.json();
    
    return jsonData;
} 

//async 와 await가 같이 붙어있어야 순차 진행이 된다!! 