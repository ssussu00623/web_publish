// 리액트에서 자주 사용
// 논리연산자: &&(and) , || (or)
/*
    (논리식1) && (논리식2) = 결과값
        true        true  = true
        true        false = false
        false       true  = false
        false       false = false
    (논리식1) || (논리식2) = 결과값
        true        true  = true
        true        false = true
        false       true = true
        false       false  = false
*/
console.log( "----------&&으로 보기----------");
let a =1;
let b = 2;
console.log((a<b) && (b>a));
console.log((a<b) && (b<a));
console.log((a === b) && (b>a));
console.log((a === b) && (b<a));

console.log( "----------||으로 보기----------");
console.log((a<b) || (b>a));
console.log((a<b) || (b<a));
console.log((a === b) || (b>a));
console.log((a === b) || (b<a));

console.log( "----------숏컷연산자----------");
console.log( "----------&&----------");
// 논리연산자의 특성을 이용해 빠른처리가 가능하도록 배치, 출력하는 것 
// 임의의 숫자를 입력받아, 1~9까지의 범위에 포함되면출력
// &&의 경우 앞의 값이 false라면 뒤의 수식을 자동 연산하지 않기 때문에 빠른 출력을 위해 
// 편리를 위해 거짓 값을 가장 앞에 배치해준다.  외워버려~!!
let number =11;
if ((number < 10) && (number > 0)){
    console.log(`number는 사용 가능한 숫자 [${number}]입니다.`);
} else {
    console.log(`number를 다시 입력해주세요.`)
}
console.log( "----------||----------");
// ||의 경우 둘 중 하나라도 true라면 true로 출력하기 때문에 true를 앞에 오도록 함

let number2 =11;
if ((number2 > 0) || (number2 < 10)){
    console.log(`number2는 사용 가능한 숫자 [${number2}]입니다.`);
} else {
    console.log(`number2를 다시 입력해주세요.`)
}