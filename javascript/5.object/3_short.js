//변수를 객체의 value로 사용하는 경우, property 생략 가능 
let name ="홍길동"
let age =20;

const person= {
    name, age
}
// 변수를 통해서 객체에 프로퍼티 이름이 같을 경우 생략이 가능하다.
//  아래처럼 직접 변수에 값을 지정하는 것은 불가능함. 
/*
const person= {
    "홍길동", 20
}
*/
console.log(person);

let x= 0; let y= 0;
const obj={x,y}

let fname = "apple";
let emoji = "🍎";
let color = "Red";
const fruit = {fname, emoji, color};

console.log(obj);
console.log(fruit);

/*
응용해보기) 한 회사에서 사원들의 정보를 입력받아서, 객체로 반환하는 함수를 정의해보세요
사원정보 - 사번(empno), 이름(ename), 나이(age)
*/

function createObj(empno, ename, age) {
    return {empno, ename, age};
}
console.log(createObj('1234', '홍길동', 30)); //{ empno: '1234', ename: '홍길동', age: 30 }
console.log(createObj('5678', '김철수', 20)); //{ empno: '5678', ename: '김철수', age: 20 }
createObj('1234', '홍길동', 30);
createObj('5678', '김철수', 20);

/* 배열로 추가하는 것도... 
[
    {empno: '1234', ename: '홍길동', age: 30},
    {empno: '5678', ename: '김철수', age: 20}...
]

*/

