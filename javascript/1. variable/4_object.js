// object : Array (배열: []), Jason ({})
let apple = null;
apple = {
    name:'apple',
    color: 'red',
    display: '🍎'
};
console.log(apple);
console.log(apple.name); // . 사이에 공간이 있으면 안됨!
console.log(apple.color); // . 사이에 공간이 있으면 안됨!
console.log(apple.display); // . 사이에 공간이 있으면 안됨!

/*
apple = {
    프로퍼티:값; < 이게 계속 반복 
};
*/
let orange = {
    name:'orange',
    color: 'orange',
    display: '🍊'
};
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);

// 1~5까지 출력
let numberList = [1, 2, 3, 4, 5]; //이건 배열이에요!
console.log(numberList);
console.log(numberList[0]);//배열 중에 []번지에 있는 걸 찾을게!
console.log(numberList[5]); 
//모든 배열은 0번부터이기 때문에 undefined, 정의 되지 않음이 보임
console.log(numberList[4]);

