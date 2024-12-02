//text 배열을 입력받아, 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여 반환하여 주세요
const textFilter = (object) => {
    //text에 textArray 값들이 들어갈 수 있도록 이름을 지정해준 것. {}에는 조건이 들어가야한다.
    ((text)=> text.length >= 3);
    //얘도 콜백함수!!!!!!!
    let result= object.filter((text)=>text.length >= 3);
    // 여기 있는 result는 {}안에서만 살아있다.
    return result;
        //이 값들을 return 할 수 있게 함수에 return을 빼먹으면 안됨 ! ! 
}

/*
    const textFilter = (object) => {
        return object.filter((text)=>text.length >= 3);
    } 이렇게 줄여서 사용 할 수 있음
*/

//2. function 활용하기 
function textFilter2(object) {
    return object.filter((text)=>text.length >= 3);
}

let  textArray = textFilter(['nodejs','1234', 're', 'ja'])
let result = textFilter(textArray); 
// 여기에 바로 (['nodejs','1234', 're', 'ja'])를넣을 수도 있지만... 파라미터로남고 사라지기 때문에 중간 저장체계를 사용한다.
// 전체에서 쓰는 result기 때문에 중복으로 보이지만 중복이 아니다
console.log(result);

//2. 숫자 배열을 입력받아, 짝수만 필터링하여 출력하는 함수를 생성해주세요.

const evenNumber = (array) => {
    return array.filter((number)=> !(number%2));
    /*
    return array.filter((number)=> number%2); 이렇게 하면 홀수 값이(나머지가 남는게) true가 되기 때문에...
    return array.filter((number)=> number%2===0);로도 할 수 있지만 1의 값을 false 만들어 진행한다.
    */
}

const oddNumber = (array) => {
    return array.filter((number)=> number%2)
}

let numbers = [1,2,3,4,5,6,7,8]
console.log(evenNumber(numbers));
console.log(oddNumber(numbers));

//3. 사원의 아이디를 받아서 번호를, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를 
//조합하여 사번을 생성해주세요.
//사원의 아이디는 배열객체로 입력받고, 출력도 배열형태로 입력해주세요
/*
const creatEmployeenNumber = (array)=> {
    //이름은 아무렇게나 줘도 되는데 array로 주었음 
    return array.map((employeeIds)=> employeeIds.concat ((Math.random()*10000000)))
    //전체 배열에 적용되는 걸 하기 위해서~ map이 적합하다
};
*/
/* return 있는 값*/
const creatEmployeenNumber = (array)=> {
    return array.map((id)=> { // 
        let number = Math.trunc(Math.random()*10000000);
        return id.concat('_', number); //맵에 리턴하는것... 'hong_414193'...를 리턴한다.
    }) // [이 리턴은 ['hong_414193'...]를 리턴한다. 
}

//return없이 1줄로 작성하기... 모든 값을 return값을 한 번에 넘긴다. 
const creatEmployeenNumber2 = (array)=> {
    return array.map((id)=> id.concat('_', Math.trunc(Math.random()*10000000)));
}

//중복된 데이터 처리
const creatEmployeenNumber3 = (array)=> {
// console.log(Array.from(array2));
let array2 = new Set(array);
return Array.from(array2).map ((id)=>
    id.concat('_', Math.trunc(Math.random()*10000000)));
}

const employeeIds = ['hong', 'test', 'abcr', 'test1234', 'hong', 'test']
const employeeNumbers = creatEmployeenNumber(employeeIds);
const employeeNumbers2 = creatEmployeenNumber2(employeeIds);
const employeeNumbers3 = creatEmployeenNumber3(employeeIds);
console.log(employeeNumbers);
console.log(employeeNumbers2);
console.log(employeeNumbers3);

