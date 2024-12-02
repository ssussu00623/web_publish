// 모든 Iterable object에 사용 가능 
/* 자주 사용할 수 있는 4가지 
    ... (Spread Operator, 전개구문)
    function 함수명(...param) param [];
    [...Iterable] 이 배열은 요소를 제한 없이 받겠다는 뜻.
    {...iterable} 
*/
// function 함수명(param[]) param []; 
//  ㄴ 이렇게 가면 안됨 배열만 들어갈 수 있는거지 배열로 만들어주는게 아니기 떄문... 


/* 파라미터 값을 정확하게 아는 경우는 이렇게 쓸 수 있지만... 
function add (a, b){
    return a + b;
}

let sum = add(1,2);
console.log(`sum=${sum}`);
*/

//가짓수에 제한 없이 값을 출력하고 싶을 때는 이렇게~ 
// 1. fumction 변수명
function add (...numbers/*배열이 된다.*/){
    let sum = 0;
    for (number of numbers) sum += parseInt(number);  
    //''string으로 묶인 값이 와도 자동으로 더해지게 parseInt를 해줘야함
    //0은 자동으로 스킵된다. 
    return sum;
}

let sum = add(1,2,3,4,5,'6');
console.log(`sum=${sum}`);

// 2. [...iterable]
let fruit1 = ['🍏', '🍋'];
let fruit2 = ['🍓', '🍊', '🍉'];

/* 그냥 더하기만 했을 때 
    let fruit3 = fruit1.concat(fruit2) //1에 2 결합!! 
    let fruit4 = [...fruit1, ...fruit2]; //fruit 안에 든 모든 요소를 가져온다. ...이 없다면 주소값만 가져옴. 
*/

// fruit1과 fruit2 사이에 '🍍' 추가
let fruit3 = fruit1.concat('🍍', fruit2) 
let fruit4 = [...fruit1, '🍍', ...fruit2]; //리액트에서는 이걸 더 많이 쓴다.

console.log(`fruit3= ${fruit3}`);
console.log(`fruit4= ${fruit4}`);

// 3. {...iterable}
const hong = {
    name: "홍길동",
    age: 20,
    address: "서울시 강남구"
}

const hongUpdate = {
    ...hong, // 이것도 배열을 가져오는 것이 아니라 모든 요소를 가져오는 것 
    job: "개발자"
}

console.log(hongUpdate);
