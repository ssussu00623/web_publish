// 임의의 숫자를 입력받아...숫자가 짝수이면 빨간사과,
// 홀수이면 초록사과를 출력해주세요

// 1. 숫자 입력받기
// 2. 숫자 체크 (짝/홀) 결과에 따라값 출력
// 3. 값 출력
/*
let num = 100;
let choice = undefined;
if (num === 100 % 2){
    choice = "짝수";
} else (num === 100 % 1){
    choice = "홀수";
}
console.log(`${choice} 입니다.`);
*/
// 혼자해본 것 (ㅋㅋ)
let num = 100;
let choice = undefined;
if (num % 2) choice = "🍏"; // === 0 없다면 0:false 1:true 값으로 출력된다. 짧게 쓰는게 용이!
else choice = "🍎";
console.log(`${choice} 입니다.`);

// 삼항연산자로바꿔보자 () ? : ;
let result = undefined;
(num % 2) ? result="짝수🍎": result = "홀수🍏";
console.log(result);

//! not을 활용해보자! true false 자리를 바꾸는 것 말고 트루펄스 값을 !not을 통해 반전시키면 됨
let take = undefined;
(!(num % 2)) ? take="짝수🍎": take = "홀수🍏";
console.log(take);

// 삼항연산자 줄이기
let emoji = (!(num % 2)) ? "짝수🍎": "홀수🍏";
console.log(emoji);