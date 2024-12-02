// 함수의 실행결과 반환 키워드 :: return (함수니까 절대 소문자)
// 함수 안에서 찍는게 아니라 값만 반환하는 것
function add(a,b) {
    //a = parseInt(a); 이래도 되고
    //console.log(parseInt(a)+parseInt(b)); 
        //이렇게 해도 된다. 정답은 없고 효율을 생각하기
    return (parseInt(a)+parseInt(b)); 
    //let을 주지 않으면 값을 반환하는 함수이기 때문에 중간 저장하는 값이 필요하다.
}
let result = add(1, 2);
//반환받으면 호출한 값을 여기에 저장 및 호출하는 것. 
//그냥 log값을 구하면 저장 없이 다음 행이 실행되어 콜스텍에서 값이 사라지게 됨
console.log(`result = ${result}`);

// 기본값 name, 나이를  매개변수로 입력하여 object 객체를 생성한 후 반환하는 함수를 정의

function creatobject(name, age) { //어디에 정의해도 가장 먼저 읽음.단, 초기에 만들어진 function만 먼저 만들어진다. arrowfunction은 먼저 읽어주지 않음
    let obj = {
        name: name, //호출프로퍼티 : 값
        age: age
    }; //객체 생성, let으로 주는 건 계속 값이 바뀌기 때문(홍길동 30세와 방경옥 29세 처럼)
    return (obj);// 객체. 값이 넘어가는게 아니라 obj의 주소값이 넘어가는것. 그래서 name 값이 아니라 obj를 호출하여 출력한다.  
} // 입력된 정보는 {}안에서만 남아있고 사라지기 때문에 담아둔 값을 return하고... 해당 주소를 return으로 log로 출력해야한다 
let callobj= creatobject("홍길동", 30);//순서를 잘 맞춰야함(반대로 넣으면 반대로 출력됨(당연)). 
//name이 먼저니 맵핑 하기 값을 여기에 저장하고
console.log(callobj); // 여기서 호출한다. 
console.log(callobj.name);
console.log(callobj.age);

// 두 수를 입력받아 곱한 값을 출력하는 함수를 작성해보자
// 두 수는 0보다 커야함 
console.clear();

function multi(a,b){
    let result = 0;
    if (a>0 && b>0) {
        result = a * b;
    } else {
        result = "a와 b는 0보다 커야합니다.";
    }
    return result;
} 
let result2 = multi(5,2);
console.log(result2);
/*
6_result.js
{ 거대한 {}에 감싸져있는 것과 같다. 

    전역변수, Global variavle. 
    let a= undefined;
    let obj = null;
    const STATR_COUNT = 0;
    제일 위에 올려서 선언한다. 
    
        function aa{
        블럭으로 감싸있는 영역에서 선언되는 아이들.
        기능을 구현하는 작업 진행
        변수 선언시 반드시!!! 초기화!!}
        지역, 로컬(Local variable)
        lets result = 0;< 초기값으로 초기화할 수 있게 작업해야함
        lets result = '' or "";< 문자값 역시 초기값으로 초기화할 수 있게 작업해야함
        }
    */