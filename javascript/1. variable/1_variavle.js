/*
* 변수 선언 : var, let, const
* 형식 : (var, let, const) 변수명 = 데이터값; < 인터프리터. 즉 1줄씩 읽기 때문에
* 세미콜론을 꼭 넣어줘야한다. 
*/ 

// name 이라는 변수를 선언하고 홍길동으로 초기화
// age 변수를 선언하고 20으로 초기화
let name= "홍길동"; /* 문자열엔 꼭 '혹은 "를 넣기 */
let age= 20;
const address="서울시";

// 삼월이라는 name으로 바꾸기
name= "삼월";
age="서울시";
age=30;
// const address="부산시";

// let age="30";

// name, age 변수의 값을 console에 출력
console.log(name);
console.log(age);
console.log(address);