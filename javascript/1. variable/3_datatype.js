/*
    primitive 데이터 타입
    - 정수형(Integer): 100, 1 ...
    - 실수형(Float, Double): 0.123, 234.2 ...
    - 문자형(Character): '',""
    - 불린형(Boolean): true, false 
        ex) let flag = true;
    
        Reference 데이터 타입
        - 객체형(Object) : 배열([]), Json({})...
*/

// 정수형 변수
let number = 100;
console.log(number);

// 실수형변수
let fnumber = 10.234;
fnumber = 200;
console.log(fnumber);

// 불린 변수
let flag = true;// !blah < blah 값의 반대를 출력한다
flag = !true; // 이 경우 false 도 가능 
let flagTest = !flag;

// Object 객체형 변수 
let nameList = ['홍길동','홍길순','홍길남']
console.log(nameList);

// primitive, refernce 데이터 타입 초기화
let address = undefined; // primitive 선언은 되었지만 아직 값이 지정되지 않았다
let addressList = null; //reference

// 데이터 타입 비교: typeof
let x = 10;
let xx = 10;
let y = '10';
let obj = {name:'홍길동'};
console.log(x, typeof x);
console.log(y, typeof y);
console.log(x == y); // 값만 비교한 결과
console.log(x === y); //데이터 타입까지 비교 결과
console.log(xx, typeof xx);
console.log(x === xx); 
console.log(obj, typeof obj);
console.log(y === obj);

