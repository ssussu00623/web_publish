// Array 빌트인 객체의 메소드 익히기 => MDN 사이트 참조
let array1 = [1,2,3,4,5];
console.log(array1[0]); //array1.0은 오브젝트 리터럴로 접근하는 방식이라 호출 불가능. 배열의 0번을 찾는 []를 사용해야한다.
console.log(array1['0']); //숫자는 string타입이어도 자동으로 숫자로 인식하기 때문에 호출 가능.
console.log(`array1.length = ${array1.length}`);

let fruits = ['🍏', '🍋'];
console.log(fruits);
// 빨간사과추가 하기
// 인덱스이용하여 추가하기 ...
fruits[fruits.length] = '🍎';
console.log(fruits);
// 1. 배열 추가 : push(item 1....ithemN)  
// 배열의 마지막에 하나 또는 여러개의데이터 추가
// 인덱스 번호를 부여하지 않아도 자동으로 마지막 자리에 새로운 요소를 추가한다.
fruits.push('🍊')
console.log(fruits);
fruits.push('🥝','🍑','🍒','🍓','🍐')
console.log(fruits);

// let a = ['🍏', '🍋'];
// fruits.push(a);
// console.log(fruits);

// fruit 배열 전체 key 값 반환 : object.keys (인스턴스 명)
// 배열의 key값은 인덱스 주소
let keyList = Object.keys(fruits);
console.log(keyList[2]);

//3. 배열 요소 삭제 
// 3-1. 배열객체의 마지막요소 삭제 - pop()
console.log(fruits);
let deleteItem = fruits.pop(); // 삭제된 마지막 데이터가 frutits2에 저장
console.log(`deleteItem = ${deleteItem}`);
console.log(fruits);

// 3-2 배열객체의 처음요소 삭제 - shift()
let deleteItem2 = fruits.shift();
console.log(`deleteItem2 = ${deleteItem2}`);
console.log(fruits);
//console.log(fruits.shift()); 로 예시해주셨음

// 3.-3 배열 특정 요소 교체 및 삭제 - splice
// array ... 배열에 영향을 주는 것을 deep copy, 깊은 복사라 한다. 
console.log(fruits);
fruits.splice (0, 1, '🥥'); //레몬을 코코넛으로 교체
console.log(fruits);
fruits.splice(1, 3); // 1~3 번지 요소를 삭제
console.log(fruits);

fruits.splice(0,0,'🍉');//0번지 주소에 수박 추가
console.log(fruits);


// 4-3 배열객체의 특정요소  추출- slice (index1, index2) 
// index 1이 begin(시작), index2가 end(까지)로 구분되며, end는 포함하지 않고 추출한다. (미만이라는 소리)
// 원본 배열 객체의 특정 요소를 추출하여 새로운 배열로 생성 
// 원본은 유지하고 일부 요소를 복사해오는 것으로 Shallow copy. 얕은 복사라 함. 

console.log(fruits);
let sfruits1 = fruits.slice(1,3);
console.log(sfruits1); 

// ['🍉', '🥥', '🍑', '🍒', '🍓']에서 
// ['🥥', '🍑']를 추출함

//3.5 배열 합치기 : concat(배열)
console.clear();
let numberList1 = [1,2,3];
let numberList2 = [4,5,6];
console.log(numberList1.concat(numberList2));
console.log(numberList2.concat(numberList1));
//배열 객체에 push되는 것과 비슷... 

// 3.6 배열의 순서 바꾸기 : reverse ()

let numbers = [1,2,3,4,5,6];
console.log(numbers.reverse());

//3.7 배열의 중첩 해체 : flat()
// [1,2,3, 4,[5,6]] 4번지 요소에 또다른 배열이 들어가있듯이... 
// flat을 사용해 [1,2,3,4,5,6]으로 만들 수 있다.
let fnumbers = [1,2,3, 4,[5,6,[7,8]]];
console.log(fnumbers); //중첩 확인 
console.log(fnumbers.flat());// 1 level 중첩 해제
console.log(fnumbers.flat(2));// 2 level 중첩 해제

//3.8 배열의 문자 요소를 하나의 string 문자열로 반환 : join() 
let textList = ['a', 'b', 'c'];
console.log(textList);
console.log(textList.join()); //'a,b,c' 문자열이 됨
console.log(textList.join().split()); // [ 'a', 'b', 'c' ] 문자열을 split으로 다시 배열로. string일 때만 split을 쓸 수 있음

