// 선언문과 표현식의 차이
/*
    1; // 숫자 리터럴 표현식
    'hong'; // 문자 리터럴 표현식 
    1+1; // 산술연산표현식 
    함수명(); => call(); //함수 표현식
    c = 100; // 할당, 할당 표현식
    let a; // 변수 선언문
*/

let a; //선언문, 이건 비선호 표기법이기 때문에 되도록이면 다른 선언문을 활용하자.
let b=100; //표현식
let c = ''; //빈 공간이지만 ''가 차지하고있기 때문에
// 표현식처리가 된다. 빈공간 주려면 null  혹은 undifine타입임
let d = undefined; //선언문
let e = null; //선언문

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

