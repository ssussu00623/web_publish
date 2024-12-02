// object는 다양한 타입의 데이터들을 저장하는 방식. 즉 다른 곳엔 "다양한"타입을 담지 않는다. 
// 일정한 수치는 배열에 저장함. 여러가지 요소가 들어가면 배열을 사용하지 못해
// object를 활용한다. 
// object하면~ {} 이것... 블레이스를 떠올려야한다.
// object literal : {property(key):value, property:value...}
// 여기선 인덱스 번호가 없음. 프로퍼티를 통해 꺼내고 연결해야한다. 

// 배열의 절친 : for문
// object를 활용하는 예시
/*  학생관리 프로그램: 홍길동(name, age, adress, gender), 홍길순, 공유, 김철수... 배열은 숫자/문자/불린 등 다양한 정보를 한 번에 담을 수 없음.
    학생성적관리 프로그램: 홍길동(name, kor, eng, math...) */

const obj = { //const는 obj에 저장된 주소값을 변경할 수 없음. 재할당 불가(heap주소)
    name: "홍길동", // 요소값은 수정할 수 있다. 
    age: 20
}

// 1. 데이터 출력
console.log(obj);
console.log(obj.name);
console.log(obj.age);

// 2. name을 '김철수'로 변경
obj.name = "김철수";
console.log(obj.name);

// 3. age 값을 삭제
delete obj.age;
console.log(obj);
