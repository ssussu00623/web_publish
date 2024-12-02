//1~5 출력
for (let i=1; i<6; i++) {
    console.log(`i--> ${i}`);
}

// 하나하나의 값을 출력하기 위해서 lexical이 5개가 순차적으로 만들어진다.
// 실행 컨텍스트에서 각 값을 송출해달라고하는 것도 5개의 값에서 꺼내오는 것

for (var i=1; i<6; i++) {
    console.log(`i--> ${i}`);
}

// let과 같이 출력되지만 전역으로 선언되기 때문에 내부에서 예기치 못한 충돌이 발생할 수 있음. 주의.
// for블록에서는 특히 let을 사용해야한다 ! ! 
// for 루프의 인덱스 값으로 var 키워드는 권장하지 않음. 
console.log(`------let 사용의 경우-------`);

let a = [1,2,3];
for(let i=0; i<a.length; i++){
    console.log(`a[${i}]---> ${a[i]}`);
}
console.log(`------let 사용의 경우-------`);

console.log(`a[0]---> ${a[0]}`);
console.log(`a[1]---> ${a[1]}`);
console.log(`a[2]---> ${a[2]}`);
console.log(`------var 사용의 경우-------`);

let aa = [1,2,3];
for(var i=0; i<aa.length; i++){
    console.log(`aa[${i}]---> ${aa[i]}`);
}
console.log(`------var 사용의 경우-------`);

console.log(`aa[${i}]---> ${aa[0]}`);
console.log(`aa[${i}]---> ${aa[1]}`);
console.log(`aa[${i}]---> ${aa[2]}`);

// 이렇게 i값이 변경이 될 때마다 i값을 동일하게 만든 것...  ? 
// var는 전역에서 선언되기 때문에 aa의 인덱스번호만큼 호출되어 돌 때마다 값이 증가해 인덱스 번호대로 출력되지 않고 값이 계속공유된다.
// 이런식으로 문제가 생길 수 있으니 let으로 두고 사용해야한다. 

console.log(`------for ... of 사용의 경우-------`);

/**
 * 이런 문제 때문에 for ... of가 생기다.
 * 충돌을 방지하려고생겨남... 
 * for블록마다 생겨 별도로 관리하기 때문에 for of 에서는 따로선언하고 값을 출력할 수 있음.
 */

for (let element of aa){
    console.log(element);
}