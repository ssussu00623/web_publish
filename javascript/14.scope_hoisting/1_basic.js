/*
    scope(스코프) : 우리가 블록이라 부르는 것의 거대한 개념,, 
    메모리 관리, 이름의 충돌 방지, 블록 단위의 개념 구분(가장 기본적인개념)

    block(블록: {}) :
    {
        블록 단위의 실행 개념: for, swith~case, if~else..
    }
*/
let a = 10;
const b= 20;
/*
    전역변수.global variable 이 파일 어디서든 부를 수 있다.
    특징: 파일 전체 어느곳에서든지 호출이 가능. 
    변수의 초기화는 자동
*/
console.log(a);
console.log(b);

    {
        let aa = 100;
        let bb = 200;
        console.log(a, b);
        /*
        {블레이스}블록에 감싸져있으니 지역변수(로컬변수) 
        선언한 블럭 안에서만 호출 가능. {블레이스}밖에서 console.log로 볼 수 없음
        반드시 초기화를 진행해야 변수를 줄 수 있다. 값이 정해져있지 않다면 undefined라고 줘야함.
        */
    }
    
for (let i = 1; i < 6; i++) { // i는 로컬변수.
    console.log(i);
}