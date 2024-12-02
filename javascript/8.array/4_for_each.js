// 배열의 데이터를 출력하는 방식
// for, froEaaxh - 배열에서는 이 둘이 가장 메이저하다.
// for foreach

let numbers = [1,2,3,4,5];

for(let i=0; i<numbers.length; i++){
    console.log(`numbers[${i}]= ${numbers[i]}`);
    
}

//forEach => 순회(iterable) 메소드 비원 
numbers.forEach((a)=> console.log(`numbers = ${a}`)); //단독으로 사용 불가 
numbers.forEach((element, i)=> console.log(`numbers[${i}]= ${element}`)); 
// ++형식처럼 같이 보고 싶을 때 .. a에는 내가 알아볼 수 있는 것으로 넣기

//replace3 함수를 foreach 형태로 작성하기

function reaplace3(array, origin, target) {
    let arrayObject = Array.from(array);
    array.forEach((element, index) => {
        // if(element === origin) arrayObject[index] = target; 
        if(element === origin) arrayObject.splice(index, 1, target)
    });
    return arrayObject;
}

let fruit = ['🥝','🍑','🍒']
let result = reaplace3(fruit, '🥝', '🍋')
console.log(result);

