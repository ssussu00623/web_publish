//Math 클래스 - 정의된 모든 변수, 상수, 함수 값은 static으로 선언 
//Math.변수, Math.상수, Math.함수명 이름으로 호출이 가능
let num1 = 123.856;

console.log(num1);
console.log(`math.abs(num1)= ${Math.abs(num1)}`) //절대값
console.log(`math.floor(num1)= ${Math.floor(num1)}`) //소수점 절삭. 무조건 절삭 후 정수로만든다.
// console.log(`math.trunc(num1)= ${Math.trunc(num1)}`) //소수점 절삭. 
console.log(`math.round(num1)= ${Math.round(num1)}`) //소수점 절삭. //qksdhffla
console.log(`math.max(1,2,3,4,5)= ${Math.max(1,2,3,4,5)}`) //범위 내에서 최대값 출력
console.log(`math.min(1,2,3,4,5)= ${Math.min(1,2,3,4,5)}`) //범위 내에서 최소값 출력

//자릿수별 절삭
let num2 = 3.142323368545;
let result = Number(num2.toPrecision(2));
console.log(result);


//0~1 사이의 숫자를 랜덤하게 출력 즁요!!!!!
console.log(`math.random()= ${Math.random()}`) 

//1~100 사이의 숫자를 랜덤하게 출력 즁요!!!!!
let rnumber = Math.floor(Math.random()*100+1); //99가 뜨면 100. 0을 출력하지 않으니까 ~ 
console.log(rnumber);
