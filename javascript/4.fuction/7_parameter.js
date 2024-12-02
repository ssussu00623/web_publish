//함수의 호출 괄호 안에 들어가는 값들 = 함수의 값 전달 인자 
//혼자서는 실행하지 못함. 
//parameter (파라미터), argument, 매개변수
// 이렇게 파라미터 없이 진행하면 다양한 값 출력이 되지 못하고 고정된 값만 출력된다.
// console.log(`------파라미터가 없을 경우------`);

function add() {
    return 100+200;
}
// 함수 호출
let sum = add();
console.log(`sum= ${sum}`);
console.log(`------------------------------`);
console.log(`------파라미터가 있는 경우------`);
// 파라미터를 활용하면 다양한 값을 산출해낼 수 있다.c값이 추가되어도 c값을 설정하면 됨.
function add2(a,b) {
    return a+b;
}
//함수 호출
let sum2 = add2(100,500);
console.log(`sum= ${sum2}`);

console.log(`------------------------------`);
console.log(`------spread operator (전개구문) 활용하기------`);

function add3(...numbers){ // 스프레드로 입력될 정보들을 임시저장할 명령어
    return numbers;
}
let sum3 = add3(100, 500, 56, 7, 680, 135);
console.log(`${sum3}`);

//입력된 정보량에 상관없이 모두 출력함.

console.log(`------------------------------`);
console.log(`------동시에 사용하기------`);
function add4(a, b, ...datas) {
    console.log(a);
    console.log(b);
    console.log(datas);
    
}
add4 (1,2,3,4,5,6,7); //자리가 a, b, ...datas가 된다. 