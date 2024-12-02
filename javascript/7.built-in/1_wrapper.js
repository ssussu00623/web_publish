//기본(원시) 데이터타입(primitive DataType) - number, string, boolean....
//기본 데이터 타입을 클래스로 정의한 것을 wrapper라고 한다. 


/**Number class */
let a = "123";
if(typeof a === "string") a = parseInt(a); 
if(a===123) console.log(a);

if(Number("123") === 123) console.log(`a=${a}`);

let maxValue = Number.MAX_VALUE; //const 상수로 선언하고 static으로 되어있을 확률이 큼! 
let minValue = Number.MIN_VALUE;  

console.log(maxValue);
console.log(minValue);

let x = 100; // 콜스택에 저장됨 
let y = new Number(100); // new는 무조건 heap으로 

//콜스택 x에는 100, 콜스택 y에는 힙스택의 주소값이 저장된다. 

console.log(typeof x); //number
console.log(typeof y); //object
console.log(x === y); //flase가 나오는 이유는 x는 콜스택의 넘버타입. y는 힙메모리의 주소값을 가진 오브젝트이기 때문. 
console.log(x === y.valueOf()); //true valueOf는 주소값을 따라 힙스택의 정보를 확인하기 때문에 true로 출력된다. 

/**String class + Templeat literal(``) */ 

let str = "hello~"; // 콜스택은 용량이 크지 않아서 엔터를 할 수없음. 실행이되지 않음. 무조건 한 줄씩만. 확장하고싶다면 `를 사용하자!
let str2 = new String("hello~");
console.log(typeof str); //string
console.log(typeof str2); //object
console.log(str === str2);//flase가 나오는 이유는 x는 콜스택의 스트링타입. y는 힙메모리의 주소값을 가진 오브젝트이기 때문.
console.log(str === str2.valueOf()); //true 

/**Boolean class */
let flag = true;
let flag2 = new Boolean (true);
console.log(typeof flag);
console.log(typeof flag2);
console.log(flag===flag2);
console.log(flag===flag2.valueOf());

