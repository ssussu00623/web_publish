// 콜백함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함
// 비동기식 처리의 프로미스에서 많이 사용... 
// 함수 안에서 호출되는 함수
/*
const add = (a, callback) => {
    callback(a);
}

const add2 = () => {

}

add(100, add2())*/

const job = (a, callback/*callback말고 다른 걸 괜찮지만 직관적으로 볼 수 있게*/) => {
    callback(a); // 순차 실행하면서 a값을 가지고 오라는 뜻. 주소를 가지고 값을 확인하고~ 
}                // callback되어 와서 로그를 출력하고 다시 와서... 실행할게 없어 종료된다. 
const job2 = (a,b, callback) => {
    callback(a,b);
}

const print = (a) => console.log(a);
const printSum =(a,b) => {
    console.log(a+b);
}

job(100, print); //값을 받아서 log를 print를 사용해 출력하겠다.
job2(100, 200, printSum); //2개의 값을 받아서 log를 printAll을 사용해 출력하겠다.

// setTimeout 함수 호출
console.clear();
setTimeout(()=> console.log("setTimeout 실행!!"), "1000"/*딜레이 시간 설정 */);
//1단이라 블록 생략
// 딜레이 시간만큼 웹api에서 루프하다 콜스택에서 출력된다. 
// 딜레이 시간 숫자 자동 인식

setTimeout((second)=> console.log(`${second}초 후 실행!!`), 1000, 1/*딜레이 시간 설정 */);
//