// 빌트인 클래스인 promise를 통해 비동기식 처리
// 담당 직원이 생긴 것처럼 불러오는 느낌 
// 창고에 무언가를 넣었다면 담당 직원이 실패/성공을 책임지고 알려주는 로직
let promise1 = new Promise((resolve, reject)=> {
    //실행한 비동기식 로직
    setTimeout(()=> {
        resolve('javascript'); 
        // reject('fail');
    }, 3000);
})

promise1
    .then((result)=> {console.log("3초 경과");}) // 시간 경과후 callback queue에 들어가는 실행함수 정의
    .catch((error)=>{console.log(error)}); // 에러가 떠도 알려준당... 