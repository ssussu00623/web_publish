//중복된 배열을 입력받아, 중복을 제거한 후 출력
let numbers = [1,2,3,4,1,2,1,2,3,3,5,6,7,8,9];
let nSet = new Set(numbers) // Set(iteravle object: String, Array, Map, Set)

console.log(numbers); //모든 요소가 출력 됨
console.log(nSet); // Set에 넣어 중복된 값들이모두 제거된 뒤 출력
console.log(numbers.length, numbers); 
console.log(nSet.size, nSet); // 데이터 차지하는 것도 생각하면 set이 효율적


// 중복된 배열을입력받아, 중복을 제거한 후 출력하는 함수 작성
function filter(iterable) {
    return new Set(iterable);
}

let numberss = [1,2,3,4,1,2,1,2,3,3,5,6,7,8,9];
let names = ["홍길동","홍길서","홍길남","홍길북","홍길동",]

let resultObj = filter(numberss);
let resultObj2 = filter(names);

console.log(numberss);
console.log(resultObj);
console.log(resultObj2); 

//사원의 이름을 입력받아, 사번을 생성하고 각각의 변수로 반환(구조분해할당)하는 함수 작성
function creatEmployeenNumber(array){
    //배열 전체의 요소를 대상으로 하는 작업이며, 결과가 새로운 배열로 반환
    return array.map((ename)=> 
        ename.concat('_', Math.trunc(Math.random()*10000000))
        // {} 블럭으로 묶은 상태에서 실행한 경우 반드시 return키워드가 필요하다.
    ); 
    
}

let employeeNames = ['smith', 'kelly'];
let result = creatEmployeenNumber(employeeNames);
console.log(`result => ${result}`);

// smith, kelly를 각각 호출했을 때 값을 출력하고 싶다면... 구조 분해 할당을 해준다.
let [smith, kelly] = creatEmployeenNumber(employeeNames);
console.log(`smith => ${smith}`);
console.log(`kelly => ${kelly}`);

