const fList = new Map([[ 1, 'one' ],[ 2, 'two' ]]);
// 배열 값으로 주어지면 map에 맞게 구조 분해 할당이 내부에서 이루어짐
// key, value 형태인 map형태로....
console.log(fList);
console.log(fList.get(1));
console.log(fList.get(2));

// 사이즈 확인
console.log(`size ==> ${fList.size}`);

// 데이터 추가
fList.set(3, 'three');
// fList.set([4, 'four']);
// key, vlaue값으로 받기 때문에 이렇게 []배열로 set하면 key값만 부여된다. 
// 여러개를 주어도 비슷한데... set은 구조 분해 할당이 되지 않는다는 걸 알 수 있다. 
console.log(fList);

// 데이터 확인 확인 및 출력
if(fList.has(3)) console.log(fList.get(3));
// value값을 바로 확인 할 수 있게...has 와 get을 같이 쓰기

//모든 키값 출력
console.log(fList.keys()); //함수니까~ 

//모든 value 출력
console.log(fList.values()); //함수니까~ 

//key, value를 입력된 순서대로 배열 형태로 반환
let iteratorObj = fList.entries();
console.log(iteratorObj);
//{ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] }

console.log(iteratorObj.next());
//{ value: [ 1, 'one' ], done: false(모든 절차가 끝났다는 소리) }

console.log(iteratorObj.next().value);
//{ value: [ 2, 'two' ]} (위에 1값이 출력돼서 2. 프로퍼티 값은 생략된다.)

//for문.. 순회 : forEach 
fList.forEach((element)=> console.log(element))

// key를 먼저 출력하라고 부여해도 map 의 디폴트 값은 value가 먼저 출력된다. 
fList.forEach((key, value, map) => 
    console.log(key, value, map));
// forEach map에서 받을 수 있는 값은 key, value, map뿐. (준게 이거 뿐이라)
//Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

//순회 : for... of
//[key, value] 배열형태로 출력
for(let element of fList) console.log(element);
console.log(fList.keys());

//key 출력
for(let key of fList.keys()) console.log(`key=> ${key}`);

//vlaue 출력
for(let value of fList.values()) console.log(`value=> ${value}`);

//entris 출력
for(let entry of fList.entries()) console.log(typeof entry, `entrie=> ${entry}`);

//데이터 삭제
if(fList.has(1)) fList.delete(1);
console.log(fList);

//전체 삭제
fList.clear();
console.log(fList);
