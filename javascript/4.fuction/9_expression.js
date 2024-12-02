// 일반함수(모듈 만들 때), 함수표현식(익명함수. 값을 표현할 때 이름 없이 그때그때 종료), 
// 일반 함수를 화살표(arrow) 함수로 변경 가능...
// 일반함수 : function 함수명 (파라미터, ...){실행문; }
// 함수표현식 : let 함수명 = function (파라미터, ...){실행문; }
// 화살표함수 : let 함수명 = (파라미터) => {실행문; }

//일반함수 정의시 let, const선언이 불가하다.
function add () {
    return 1+2;
}

/**일반함수 표현식 */
let add2 =function() {
    return 1+2;
}

/**화살표 함수 표현식*/
/*
let add3 = () =>{
    return 1+2;
}
*/
let add3 = () => 1+2;
//값이 하나만 불러 return한다면 {블록}생략이 가능하다

let add4 = (a,b) => a+b;
//외부 값을 불러서 실행하고 싶다면 지정이 가능하다.

let add5 = (a,b,c) => console.log(a+b+c);
//값이 하나인 걸 return하는 것이니 log도 바로 찍을 수 있다. 
let add6 = (a,b,c) => {
    if (a>0 && b>0 && c>0) {
        console.log(a+b+c);
    } else {
        console.log(`a,b,c는 0보다 커야함`);
        
    }
}
//이렇게 if가 들어가는 것처럼 값이 여러 조건이 붙는다면 생략 불가능 
console.log(add());
console.log(add2());
console.log(add3());
console.log(add4(10,40));
add5(1,2,3);
add6(0,2,3);
