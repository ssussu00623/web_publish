//java에서 사용되던 걸 그대로 가져왔대
// 에러 처리 : try~chatch() 구문으로 기억.
let numbers = [1,2,3]; // length : 3개, index : 0, 1, 2
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]); // 오류는 없이 undefined 처리되고 있다.

numbers[0] = 100;
console.log(numbers[0]);

//js 에서는 동적으로 배열을 재생성한 후 값을 입력한다.(엔진에서 바로 관린)
// Java언어에서는 동적으로 배열을 재생성하지 않음. 
// ArrayIndexOutOfBoundsException 예외 상황이 발생함. 
numbers[9] = 900;
console.log(numbers[9]); 

let number = 1234;

try {
    for (n of number)
        console.log(n);  // number is not iterable error 발생하니 try로 감싸기
} catch (error) {
    console.log('에러는 엔진한테 넘김!!!');
    
}
console.log('--프로그램 종료--');
