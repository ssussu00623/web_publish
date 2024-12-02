// Set 클래스(빌트인 클래스)
// array-push / map - set / set - add 형식으로 이루어짐...
// 다양한 데이터(원시데이터(primaitive), 객체참조값) 저장
// 데이터 추가 : add(value). key 없이 value만 있어서 구조분해가이뤄지지 않는다.
// set 은 어떤 것이든 넣을 수 있고 랜덤하게... 출력한다(????)

//Set의 값은 한 번만 나타날 수 있으며. 강조된 점.
//중복되는 값들을 모두 set에 넣으면 배제되고 하나씩만 출력하게 할 수 있기 때문. 
// key와  vlaue가 필요하면 map을 사용해야함
//array 설명 못 들음 !


//데이터 추가 : add
let mySet = new Set ();

mySet.add(10);
mySet.add("홍길동");
mySet.add({age: 20});
mySet.add([1,2,3])

console.log(mySet);

//데이터 순회 출력: for ...of
// for ( of ) {} 기본 형태 기억해두기....

for (let value of mySet) {
    console.log(`value=> ${value}`);
    
}

//데이터 순회 출력: forEach
mySet.forEach((value, key, set)=> {
    console.log(value, key, set);}
)
// set에서 vlaue와 key값이 항상 같기 때문에 value와 key는 같은 값이 출력된다. 
mySet.forEach((value)=> {
    console.log(value);}
)
mySet.forEach((key)=> {
    console.log(key);}
)

//데이터 확인
console.log(mySet.has(10));
console.log(mySet.has(100));

//데이터 삭제
if(mySet.has(100)) {
    mySet.delete(100);
    console.log('삭제완료');
} else console.log('데이터가 존재하지 않음');
    

//전체삭제
mySet.clear();
console.log(mySet);