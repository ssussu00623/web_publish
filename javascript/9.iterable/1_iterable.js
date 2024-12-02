// iterable (이터러블) object - Iteration Protocol 이터레이션이라고 하는 프로토콜을 내장하고있는 규칙 / 조약
// for ... of, ...(Spread 연산자 : 전개구문), 구조분해할당(destructing object)
// String(하나하나 요소들을 배열로저장하기 때문), Array, Map, Set... 내부적으로 순회가 가능한 Iteration Protocol을 포함하고 있다. 
// 이터러블 순회적 법칙을 가지고있다는 것...?


//"Hello~ JavaScript!!!"

const text = new String("Hello~ JavaScript!!!"); //메포 클래스 형대로 new String이 아니어도자동변환... 하지만 헷갈리니까 이렇게 할래
for(let element of text) { 
    console.log(`element = ${element}`);
}
// 그냥 element로 사용하면 var로생성... 
//let 이나 const를사용해 정보를 꺼낼 수 있도록 하는게 바람직 (var는 지양해요)


// [1,2,3,4,5] 배열 출력
const numbers = [1,2,3,4,5]
for(let number of numbers) console.log(number);
// 정보가 한 줄이면 이렇게~ 도 가능

//Number 클래스 생성 및 실행
/*
    const numberClass = new Number (12345);
    for ( n of numberClass)  console.log(n);
*/
/**
     * 이렇게하면 TypeError: numberClass is not iterable 오류가 뜬다.
     * 모든 클래스가 for of가 적용되는 것이 아니다. 
     * number는 이터러블이 적용되지 않는다.
 */