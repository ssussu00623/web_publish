/*
    1. primitive DataType : 기본 데이터 타입
        - string, nember(정수, 실수 모두 포함),boolean
            ex) 100, "홍길동", '홍길동', true... 
            콜스택에 저장되며 주로 let으로 정의 된다. 
    2. Reference DataType : 참조 데이터 타입 (참조하는 데이터 주소가 있는?)
        - object literal({}로 묶인 데이터), class, array([]로 묶인 데이터)...
            ex) let obj = {name:"홍길동",...}   
                let arr = [1, 2, 3...]
            힙메모리에 저장된다. 
            동일한 데이터 타입의 obj 리터럴 요소들을 []array 여러가 저장할 수 있다.
            let arrObj = [{..}, {..}, {..}] 이렇게.
    
    **Array(배열)**
    개념 : *동일한 데이터 타입*의 요소를 여러개 저장하는 공간
            *인덱스* 주소를 통해 요소를 저장하고 관리함, 인덱스 주소는 항상 0부터 시작함
    let array1 = new Array(크기. 10(동일한 데이터가 10개 들어갈 수 있는 빈공간이 생성됨)); < 클래스 형태로 생성 // 크기 정의
    let array2 = [1, 2, 3, 4]; // 크기와 요소의 초기화
    let array3 = ['1', '2', '3']; 
    let array4 = [{name:"홍길동"}, {name: "김철수"}...]
    -
    let obj1 {key:value, key:value}
    let obj2 {key:value, key:value} //각 정보는 힙스택에 저장된다.
    let array5 = [obj1, obj2] 배열에는 주소만 저장된다.
    -
    !! 주의사항 !!
    - 배열의 생성은[](값이 딱 정해져있는 경우), new(크기만 아는 경우) 두 개를 이용하여 생성, CRUD 작업은 Array의 메소드 사용 권장 
    - for문의 구문을 사용하여 데이터를 가져온다. 
    - 배열의 인덱스는 항상 전체크기보다 하나 작음 (0부터 시작하니까)
            클래스 타입. 생성자는 클래스 타입에만 있다! 
    */  

//배열 생성
let array1 = new Array(2); //크기만 할당
console.log(array1.length);
console.log(array1[0]);
console.log(array1[1]);
console.log(typeof array1);

let array2 = new Array(1,2,3); // 크기 할당 및 초기화
//let array2 = new Array([1,2,3]); 콤마로구분되어 있으니 이렇게 받는 것과 똑같은 상태. 배열로받아 들인다. 
console.log(array2[0]);

let array3 = ['🍎','🍊', '🍋','🍏'];
console.log(array3[array3.length-1]); //배열의 마지막 요소 출력

let obj1={name : "홍길동", age: 20}
let obj2={name : "홍길서", age: 21}
let objList = [obj1, obj2];
console.log(objList[0]); // 0번지 값 출력
console.log(objList[0].name); //홍길동만 출력
console.log(objList[1].name); //홍길서만 출력

