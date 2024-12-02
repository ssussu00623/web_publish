//순회메소드가 적용되는 map 함수는 처리한 파라미터 인자로 콜백함수를 입력받아, 
//처리한 결과를 새로운 배열객체로 생성하여 반환함
//리액트에서 정~말 많이 씀
let numbers = [1,2,3,4,5];
let fnumbers = [1.001,2.002,3.003,4.004,5.005];

//foreach는 안에서 순회하고 값을 뽑아오는 것이지만, map은 순회하여 새로운 값을 복사하여 출력하는 것. 
//numbers 배열요소에 각각 10을 곱한 결과 출력
let numbers2 = numbers.map((item)=> item*10);
console.log(`numbers2= ${numbers2}`);

//fnumbers 배열 요소를 모두 정수로 변환
let fnumber2 = fnumbers.map((item)=> Math.floor(item));
// let fnumber2 = fnumbers.map(Math.floor); item이 중복이기 때문에 삭제도가능하지만...스태틱 함수로 보일수도 
// let fnumber2 = fnumbers.map((x)=> Math.floor(x)); 이 형태로 기억해두는 것이 좋다. 콜백함수인 걸 보이기 위해...
console.log(`fnumbers2= ${fnumber2}`);

// 배열의 요소로 object literal값이 있는 경우 
let object = [
    {name: "홍길동", age: 20 },
    {name: "홍길서", age: 20 },
    {name: "홍길남", age: 20 }
];
// object.forEach(() => {}); < 형태 외우기 
object.forEach((obj, idx) => {console.log(idx, obj);});

//{홍길동: 홍길동, age:20}로 만들어보기 
// 홍길동, 최영희 이름을 가진 학생 정보만 배열출력



// let objects2 = objects.map((obj) => 
//     let rObj = {};
//     if(obj.name=== "홍길동") {
//         rObj = obj;
//     } else if(obj.name === "홍길서"){
//         rObj = obj;
//     }
// return rObj;
// })



// let a = {key: value, key: value}
// a = key값. 키값을 가져오는 것이... [obj.name]. name자리에 value 값을 넣는다는 수식.
// let object2 = object.map((obj)=> {
//     //name:라는 오브젝트를 새로 만들기...
//     let resultlobj = {};
//     resultlobj[obj.name]= obj.value; // key값
//     resultlobj[obj.name]= "name" // value값에 들어감
//     resultlobj[obj.age]= obj.value; // key값
//     resultlobj[obj.age]= "age" // value값에 들어감
//     return resultlobj
// });  // 
//숫자 형태가먼저온다... { '20': 'age', '홍길동': 'name' }
// 모든 데이터에 적용하여 전체 결과를 받아야한다... map
// 모든 데이터에 일부 결과를 받아야하는 경우...filter
console.log(object2);
