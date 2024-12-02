// typeof, typeof(operand, pterand...)
let name = '길동쓰'
let age = 24;
let a = 100;
a = 0.1;
a = '가나다';
a = 0.1;
a = 0.1;
a = 0.1;
a = 0.1;
a = 0.1;
a = 0.1;
a = 0.1;
a = 0.1;
a = true;

console.log(typeof 100);
console.log(typeof '자바스크립트');
console.log(typeof name);
console.log(typeof a);
console.log(typeof a === typeof age);
// typeof로 비교한 경우 데이터 타입을 비교함
console.log(typeof (a, age, name));
// 이렇게 비교하면 가장 마지막 값인 name의 값을 출력한다. 
console.log(typeof (a, age, name)===typeof(age));
// 응용하여 확인하면 name과 age의 비교값을 볼 수 있다.