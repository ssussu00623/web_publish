// function은 object -> 함수를 사용하면 heap에 데이터 주소값을 가지고 있음. 
function add(a,b){
    console.log(a+b);
}

console.log(add);

let sum = add; //같은 레퍼런스를 갖게 해본것. 보통은 객체 이름을 바꾸는 경우는 거의 없다. call by reference
console.log(sum);

(add(1,3));
(sum(1,2));
console.log('--- 프로그램 종료 ---');

// function의 주소를 불러올 때. 실제 주소를 가져오는 것은 아니고 (볼 수 없는 요소라)
// [Function: add] 이렇게 불러내진다. 

