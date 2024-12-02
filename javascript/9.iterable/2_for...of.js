//for ... of 
// iteravle object의 요소를 순회하여 출력함
// 형식 : for(valuable of iterable_object) {statement(실행문);}

//배열 요소를 교체하는 함수를 정의 : for ... of

function replace (array, origin, target) {

    //for each 방식 가장 효율적인 방법이다. 
    let resultArray = Array.from(array);
    resultArray.forEach((element, index)=> {
        if(element === origin) resultArray.splice(index, 1, target);
    });

    /*기본 for문
    for (let i = 0; i < resultArray; i++) {
        if (resultArray[i] === origin){
            // resultArray[i] = target; 가능하지만 권장하지 않는 방법... 
            resultArray.splice(i, 1, target);
        }
    }
        */
    /* for ... of
    let index = 0;
    for (element of resultArray) {
        if (element === origin){
            resultArray.splice(index, 1, target)
        }
        //splice(인덱스, 1, length) // 인덱스가 없기 때문에... count 주듯 let index를 추가해주었다.
        index++; // 임의로 부여한 index가 이렇게 증가할 수 있도록 함
    } */
    return resultArray;
} 

let fruits = ['🍊','🍎','🍓','🍎','🍋','🍎']
let result = replace(fruits,'🍎' , '🍏')
console.log(result);

let numbers = [1,2,3,4,2,2,5,2];
let result2 = replace(numbers, 2, 7);
console.log(result2);


// map과 filter를 사용하여 실행해보기 