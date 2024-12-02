// 사칙연산 : +, -, *, /, %
console.log(3+5);
console.log(3-5);
console.log(3*5);
console.log(3/5);
console.log(3%5); //모듈러 연산, 나머지 연산자
console.log(3**5);

//  % (모듈러 연산자)
let a= 100;
console.log( a % 2)
// 결과값에 따라 짝수인 걸알 수 있다. (남은 값이 없어서!)

// + (접합연산자)
console.log(10 +20);
console.log("sum : "+ 10 + 20);
// 연산 시작점을 "문자"로 시작하면 뒤에 나오는+는 접합연산자로 실행됨
console.log("sum : "+ (10 + 20));
// 문자와 영역을 분리해주면 사칙연산을 실행한다.
console.log(`sum : ${10 + 20}`);
// 요즘은 ``를 더 활용하고 있으니 확인해둘 것. 값은 똑같다.
