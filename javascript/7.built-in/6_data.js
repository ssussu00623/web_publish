// 날짜 형식 - Date 클래스
console.log(Date.now()); // 오히려 더 복잡
console.log(new Date());

let date = new Date();
console.log(date.getFullYear()); //2024
console.log(date.getMonth()+1); //11
console.log(date.getDate()); //15


let year = date.getFullYear()/*여기까지 하면 넘버타입*/.toString(); //toString을 붙이면 string타입
let month = date.getMonth()+1; //문자열로 시작하면 뒤의 값까지 모두 문자열이 되기 때문에 제일 앞에 붙는 게 아니라면 생략도 가능 
let day = date.getDate();
let hours = date.getHours();
let seconds = date.getSeconds();
let minutes = date.getMinutes();

// '2024년 11월 15일' => string.concat
let display = year.concat('년 ', month, '월 ', day, '일');
console.log(display);

// '2024년 11월 15일' => 템플릿 리터럴
display = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
console.log(display);

//날짜 출력 타입 지정
// 많이 사용할 수 있으니 잘 기억해두기! 
console.log(date.toLocaleString('ko-KR')); //한국버전 시간까지 나옴
console.log(date.toLocaleString('en-US')); //미국버전

console.log(date.toLocaleDateString('ko-KR')); // 날짜만 나옴 
console.log(date.toLocaleDateString('en-US')); 
