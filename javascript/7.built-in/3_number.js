//Number 클래스들의 메소드
//Number객체.valueOf()

let a = 100;
let b = new Number(100);

console.log(typeof a, typeof b);
console.log(a.valueOf()===b.valueOf());

//Number객체. toLocaleString )10000 =>10,000
// 3자리씩 끊어서 쉼표로 구분 
let num = 1230000;
let num2 = new Number(987546054068470);
console.log(num.toLocaleString());
console.log(num2.toLocaleString());

// MAX_VALUE, MIN_VALUE ...=> Number.MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
let num3 = 123.45;
console.log(num3.toFixed());
