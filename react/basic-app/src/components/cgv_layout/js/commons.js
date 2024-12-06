/***
 * 내용: 비동기식 네트워크 연동 실행 함수
 * @param {} url
 * @returns 
 */

export async function fetchJSON(url){
    const data = await fetch(url); // 비동기라 창고로m
    // fetcg이용해서 url실행하고 데이터로 받는다.
    const jasonData = await data.json() //동기라 바로 실행
    // e데이터를 받아 json으로 변환
    return jasonData;
    // 제이슨 데이터를 반환한다.
}
// 순서를 지켜서 실행하게 하기 위해... 
// await fetch(url)를 기다리고  await data.json()가 json데이터로 만들어 줄 때까지 기다리도록 async . 순서를 킴