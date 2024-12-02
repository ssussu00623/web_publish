const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.filter((item)=> item.length > 6)) 
// 필터도 새로운 배열을 만들어 줌 
// 블록 {}이 있는 경우 반드시 return을 줘야한다. !!!!! 별 5개.
// console.log(words.filter((item)=> {return item.length > 6;}))
// 1줄일 경우 {}블록과 return을 생략해도 값이 출력된다. 자바스크립트의 언어라는 점 명심.

function isBigEnough(value) {
    return value >= 10;
    }
    
    const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // 필터링된 값은 [12, 130, 44] 이런식으로 함수를 호출하여 필터를 사용할 수 있다.

// 5이상의 숫자를 출력하기.
let numbers = [1, 2, 3, 4, 5, 6, 7];
let array = [];
numbers.forEach((x)=> {
    if(x >=5) array.push(x);
} );
console.log(array);

//let array2 = numbers.filter((x)=> {return x >= 5});
let array2 = numbers.filter((x)=> x >= 5 );
console.log(array2);

let numbers2 = [1.4, 2.5, 3.2, 4.7, 5, 6, 7];
//3보다 큰 숫자만 사용하기
// let array3 = numbers2.filter((x)=> x > 3);
//console.log(array3) 이렇게 2 줄보단 한번에 출력할 수도 있다. (간단한 경우라)
console.log(numbers2.filter((x)=> x > 3));

// numbers2의 모든 값을 반올림한 후 3보다 크거나 같은 값을 출력
console.log(numbers2.map((x)=> Math.round(x)).filter((x)=> x>=3));
console.log(numbers2.map(Math.round).filter((x)=> x>=3)); //이렇게 생략도 가능 

//아이템을 검색하여 갯수를 리턴
/* 정석적인 간략한 값...*/
function searchItem(array, sItem){
    // array.filter((item) => {return item === sItem});
    return array.filter((item) => item === sItem).length;
}

/* 길게 길게 본 값... 이렇게 사용하려면 각 값의 순환하는 값들을 지정해줘야함.*/
function searchItem2(array, sItem) {
    let count = 0;
    array.forEach((item)=> {
        if(item === sItem) count++;
    })
    return count;
}


let fList = ['🍋','🍊','🍎','🍓', '🍋']; 
let nList = [1,2,4,5,7,4,6,45,33,90];

console.log(`count ==> ${searchItem(fList, '🍋')}`);
console.log(`count ==> ${searchItem(nList, 4)}`);

