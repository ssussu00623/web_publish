//구조 분해 할당(destructure) 정~~~말 정말많이사용함. 중요!! !
let numbers = [1,2,3,4,5];
let aa = numbers;
let [a, b, ...nlist] = numbers; // 이 형식을 잘 기억해두기. 
// numbers의 구조를 [] 형식으로 바꿔준다.는 뜻 
// let aa = number < 이 형식은 주소값으로 복사해오는 것이고 [] = 로 주는 건 새로운 형식에 맞추는 것. 

console.log(aa);
console.log(a);
console.log(b);
console.log(nlist);


// 주의사항!! 구조분해할당하려고하면 같은 구조형식이어야한다. (배열은 배열끼리)

let hong = {
    name: "홍길동", 
    age: 20,
    address: "서울시 강남구"
}

//hong이라는 사람의 정보를 각각의 변수로 정의

let {name, age, address} = hong;
/* 
    구조 분해 할당으로 정의되는 변수는 
    객체의 속성(프로퍼티, 키)과 동일한 이름으로 정의되어야함. 

    이렇게 길게 쓸 수도 있지만 효율적으로 구조 분해 할당을 사용! 
    let name = hong.name;
    let age = hong.age;
    let address = hong.address;
 */

console.log(name);
console.log(age);
console.log(address);

//분해해서 출력이 가능하다. 


// 함수의 반환값을 받아 구조분해 할당(destructure)방식으로 정의
function creatEmonji(){
    return {
        fname: "apple",
        color: "red",
        emoji: "🍎"
    };
}

let {color, emoji, fname, price=1000}= creatEmonji(); 
// {}은 받는 순서는 상관 없다. 이름(키값)이 일치하기 때문에~ 
// 반대로 말하면 []은 순서가 중요하니까 기억해두기.
console.log(fname, color, emoji);
//let price = 1000; 값이 없으면 undefined 되기 때문에 직접 값을 할당해줘도 OK
console.log(color, emoji, fname, price);

//함수 파라미터, 배열객체 안에서 다른 배열을 호출할 때, 오브젝트 리터럴에서 오브젝트 리터럴을 호출해올때. 
//주소값이아니라 요소 자체를 가져오는 것. 

// quiz

let flist = ['🍎','🍊','🍋'];
let [apple, orange, lemon] = flist;
console.log(apple, orange, lemon); 