// call by value
let a=100;
let b="홍길동";
let c= a;

console.log(a);
console.log(b);
console.log(c);
console.log(a === c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// call by reference

let aa=[1, 2, 3];
let bb="빙그레";
let cc= aa;

console.log(aa);
console.log(bb);
console.log(cc);
console.log(aa === cc);
console.log(typeof aa);
console.log(typeof cc);