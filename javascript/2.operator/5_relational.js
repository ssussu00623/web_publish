// 비교 연산자 : >, <, >=, <=, !=, ==, ===
// 비교한 실행결과 타입 : boolean type (true / fals 맞다 / 틀리다로 나옴)
// 제어문 if, while, (if~ else) 문에서 사용.
/*
    if(조건식(비교연산자를 넣은 형태): 3 > 2){
        true // 참일때 블라블라를 실행해라
    } else{ //참 말고
        false // 다른것일때 블라블라를 실행해라. 이 경우엔 false
    }
*/

console.log(3 > 2);
console.log(3 < 2);
console.log(3 >= 3);
console.log(3 <= 3);
console.log(3 == '2'); //3 == 2이 경우엔 자동으로 3과 2를 비교한다.
console.log(3 == 'A'); //3 == 67아스키 코드로 자동 변환되어 비교한다.
console.log(3 === '2'); //number === string 데이터 타입 비교로 숫자와 문자를 비교한다.
console.log(3 === 'A'); // number === string 

let obj1 = {
    name: '홍길동'
};
let obj2 = {
    name: '홍길동'
}
let obj3 = obj1

console.log(obj1)
console.log(obj2)
console.log(`obj1 : ${obj1}`);
console.log(`obj2 : ${obj2}`);

console.log(obj1== obj2);
// 각 obj들이 갖는 heap주소 를 가지고와서 비교하기 때문에 같을 수 없음 ㅋ
console.log(obj1 === obj2);
// 오브젝트의 타입까지 비교해서 flas
console.log(typeof obj1 === typeof obj2);
// 타입을 비교하니 같은 obj라 true

console.log(obj1 == obj3);
console.log(obj1 == obj3);
console.log(typeof obj1 === typeof obj3);
// obj3 = obj1이라고 앞서 지정했기 때문에 tru값이 나온다.

