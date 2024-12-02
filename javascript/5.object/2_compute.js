const person = {
    name: "홍길동",
    age: 20,
    job: "개발자"
}
const fruit = {
    name: "사과",
    emoji: "🍎"
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.job);

// person 객체를  CRUD로 관리하는 함수를 정의 
// C데이터를 넣고  R데이터를 읽고  U데이터를 업로드하고 D데이터를 지울 수 있는 것 
// C(Create), R(Read), U(Update), D(Delete)
// 함수서는... 
// set함수명(setValue()) 뭐든 set이 붙어있음 값이 넣으라는 것...
// getValue()는 데이터를 꺼내고
// updateValue() 업데이트!
// deleteValue()삭제
/*
function setValue(object, newkey, value){
    object[newkey] = value;
}
function getValue(object, key){
    return object[key]; //ex) person.name;
}
function updateValue(object, key, newValue){
    object[key] = newValue;
}
function deleteValue(object, newkey, value){
    delete object[key];
}
    */

// 화살표(Arrow) 함수 표현식으로 바꿔보기
// const 함수명 = (파라미터..) => {실행문;}
const setValue = (object, newKey, value)=> object[newKey] = value;
const getValue = (object, Key)=> object[Key]
const updateValue = (object, key, newValue)=> object[key]=newValue
const deleteValue = (object, key) => delete object[key];

// setValue (오브젝트 리터럴, "새로운 키값(프로퍼티)", 입력될 데이터(value))
// 원래는 키값에도 ""가 있어야해서... 새로 삽입할 때는 정석적으로 붙여 넣어준다. (정의단계에서는 자동으로 정의됨)

setValue(person, "adress", "서울시")
setValue(fruit, "color", "Red");

console.log(person);
console.log(fruit);

console.log(getValue(person,"name"));
console.log(getValue(fruit,"color"));

updateValue(person,"name", "김철수");
updateValue(fruit,"color", "Green");
console.log(person);
console.log(fruit);

deleteValue(person, "age");
deleteValue(fruit, "name");
console.log(person);
console.log(fruit);