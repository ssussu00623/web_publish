// key, value를 한 쌍으로 가지는 클래스(new로 힙에 생성해야함)
// set(key, value) : 데이터 추가
// get(key) : 데이터 출력
// has(key) : 데이터 존재여부 확인 true, false
// delete(key) : 데이터 삭제
// Map은 iterable object이므로 for ...of, spread, destructure 가능함

let fruitMap = new Map();

//추가
fruitMap.set('apple', '🍎'); //apple이라는 key에 이모지를 넣고
fruitMap.set('orange', '🍊'); // 여러개의 중복값이 잇어도 하나만 key값이 같다면 하나만 저장됨
fruitMap.set('orange', '🍊'); 
console.log(fruitMap); //2개 입력됐는지 확인

console.log(fruitMap.get('apple')); // apple 키값을 출력
console.log(fruitMap.get('orange')); 

console.log(fruitMap.has('orange')); //각값을 가지고 있는지 확인
console.log(fruitMap.has('lemon')); 

if(fruitMap.has('orange'))          //값을 가지고 있다면
    fruitMap.delete('orange');      // 값을 삭제하도록 함

console.log(fruitMap);
