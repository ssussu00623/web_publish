// 배열의 '🍎' 요소를 '🍓'로 교체하여 콘솔창 출력
let fruit = ['🍎','🍍','🍎'];
console.log(fruit);
// output=> ['🍓','🍍','🍓';

//1-1 for문의 index 주소 활용
// for문을 돌릴 때만 반영되기 때문에... 함수로 만들어 활용하는 방법도 있음 
for(let i =0; i<fruit.length; i++){
    if(fruit[i] ==='🍎') fruit[i] = '🍓';
    console.log(fruit[i]);
}

//1-2 함수 만들어 확장하기 
// 파라미터(배열 객체, old, new) 배열 객체를 같이 넘겨줘야 실행할 수 있음 
function reaplace(array, oldValue, newValue){
    let result = '';
    for(let i =0; i<array.length; i++){
        if(array[i] ===oldValue) array[i] = newValue;
        result += `${array[i]}\t`;
    }
    console.log(result);
    //console.log(array);로 출력해도 수정된 값이 출력된다.
    
}

reaplace(fruit, '🍎', '🍓') // 사과가 oldValue, 딸기가 newValue
let numbers = [1,2,3,4,5,]
reaplace(numbers, 1, 9) // 함수로 지정했기 때문에 사과뿐만 아니라 1도 9로 출력된다. 

// fruit.splice(0,1,'🍓')
// console.log(fruit);
// fruit.splice(2,2,'🍓')
// console.log(fruit);

//1.3 함수: 파라미터 (배열객체, old, new)
//배열타입으로 객체를 반환받고 싶다
/*
function reaplace2 (array, oldValue, newValue){
    for(let i =0; i<array.length; i++){
        if(array[i] ===oldValue) array[i] = newValue;
    }
    return array;
}

let names = ['hong', 'seo', 'kim', 'lee']
let resultObj = reaplace2(names, 'hong','gong');
console.log(names);
*/
//Arrayfrom
//깊은 복사로 사용하는 것을 지양하기 때문에 shallow. 얕은 복사를 하기 위해 let을 삽입해 중간값을 저장/복사하여 출력한다.
//exprt사용....... 
function reaplace2 (array, oldValue, newValue){
    let resultArray = Array.from(array); 
    for(let i =0; i<resultArray.length; i++){
        if(resultArray[i] ===oldValue) array[i] = newValue;
    }
    return resultArray;
}

let names = ['hong', 'seo', 'kim', 'lee']
let resultObj = reaplace2(names, 'hong','gong');
console.log(names);