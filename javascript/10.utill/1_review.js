//Iterable Object - 순회가 가능한 객체들을 말함, string, Array, Map, Set...
// for...of, Spread Operator (전개 구문), Destructing Object(구조분해 할당)
/*인덱스를 지켜서 저장해야하면 Array, 키-값으로 저장해야하면 Map, 중복 없이 데이터를 하나씩 넣고 순서가 상관 없으면 Set
Map: (key, value)키와 값을 세트로 가지고 있음. 서로가 한 쌍이라 인덱스가 따로 없다. 
    set, get, has, keys, values, entris, clear...

set: (value) 값만 가지고 있다. 많은 데이터가 들어가면 순서 상관 없이 값이 출력된다.
    add, get, has, delete, keys(키와 값이 무조건 같기 때문에 큰 의미 없음), values, clear...
*/

//1. Spread Operator 


function display (...params){
    for(number of params) console.log(number);
    //인덱스 수만큼 돌아서 값을 찾고 출력하기... 각 수(size?)만큼 출력된다.
}
display(1,2);
display(1,2,3,4)

const hong = {
    name: "홍길동", 
    age: 20
};

const hongUpdate ={
    ...hong,
    address: "서울시 강남구"
};

console.log(hongUpdate);

//2. Desrtuctring Object 
const getObject = () => {
    return {name:"공유", age: 30};
}
const {name, age}= getObject();
console.log(name, age);

const getObject2 = () => {
    return [1,2,3];
}
const [n1,n2,n3] = getObject2()
//변수를 선언하는 과정을 생략... 인덱스 번호에 맞춰 각 값을 삽입하라는 명령을 했다고 봐야함
console.log(n1, n2, n3);

//인스턴스 객체.forEach(콜백함수(이 안에서 실행되고 사라지는 익명 함수));

const numbers = [1,2,3];
numbers.forEach((element, i)=>console.log(element, i));

//Map

const myMap = new Map();
myMap.set('name', '홍길동')
myMap.set('age', 20)
myMap.forEach((value, key)=> console.log(key, value));

//Set
const mySet = new Set()
mySet.add("홍길동");
mySet.add("홍길동");
mySet.add("서현진");
console.log(mySet); // 중복을 생략하기 때문에 홍길동 서현진 2개의 값만 볼 수 있음
mySet.forEach((value, key)=> console.log(key, value)); //키값이 없어 value를 그대로 복사해오기 때문에 두번 출력된다.