/*
fuction(소문자) 함수명(파라미터(=매개변수...정의 할 때는 파라미터, 호출할 때는 매개변수라고하지만 같은 애임)) {
    실행로직;
}

    함수호출 :: 함수명(파라미터 형식일치)

heap에 저장되기 때문에 언제 어디서든 호출 가능(오브젝트)
리액트는 모두 함수 기반으로 실행된다.
함수는 변조체가 필요없다(?)

내장(Built-in) 함수 : 자주사용하는 기능을 함수로 구현하여 엔진에서 제공함
-parseInt(문자열); 문자열을 숫자로 변환하는 함수 
-parseFloat(문자열); 문자열 데이터를 실수형 데이터로 변경
-string(): 문자형 데이터로 변경
-number(): 숫자형 데이터로 변경
-boolean(): 논리형 데이터로변경 
*/
// 빌트인 함수 paraseInt 호출
console.log( "-------빌트인 함수 paraseInt 호출--------");
let a = '100'
console.log(a, typeof a);
console.log(parseInt(a), typeof parseInt(a));
console.log(a+100);
console.log(parseInt(a)+100);

// 두개의 숫자를 입력받아, 합계를 출력하는 로직 작성
console.log( "-------두개의 숫자를 입력받아, 합계를 출력하는 로직 작성--------");
let num1 = 10;
let num2 = 20;
console.log(`sum==> ${num1 + num2}`);

// parseInt 구조 확인
console.log( "-------parseInt 구조 확인--------");
let cnumber = parseInt('1234');
console.log(typeof cnumber);

console.log( "-------함수구조 작성--------");
function add(a, b){ //엔진에서는 var a 처럼 호출된다. let으로는 사용 불가. 
    console.log(`sum==> ${parseInt (a) + parseInt (b)}`)
}

console.log( "-------구조를 간단히 --------");
function add(a, b){
    let n1 = parseInt(a);
    let n2 = parseInt(b); 
    console.log(`sum ==> ${n1 + n2}`)
}

//두 숫자의 차를 구하되 음수가 출력되지 않도록 함
//a가 b보다 큰 경우 결과값 출력
function min(a, b) { //무조건 소문자
    a= parseInt(a);
    b= parseInt(b);
    if (a>=b) {
        console.log(`sum ==> ${a-b}`);
    } else {
        console.log(`a값은 b보다 커야합니다.`);
    }
    } 
//함수호출 위치에 결과값 출력
add('402135', '52440')
min('20','100')