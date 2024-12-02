// string 클래스의 메소드 정리
let name ="홍길동";
let sname = new String("홍길동");
console.log(typeof name, typeof sname);
console.log(name === sname);
console.log(name === sname.valueOf());

let text = "Hello~ JavaScript~!!!" //인덱스처럼 지정된 자리이기 때문에~ 0번부터 시작한다.
console.log(text.charAt(0));
console.log(text[1]); //인덱스 "배열"형태이기 때문에 배열 순번을 부르는 것처럼 호출이 가능하다.
console.log("Welcome~".concat(text)); 
console.log(text.indexOf('o')); //해당 string이 포함된 인덱스 번호를 출력. 빈 공간에도 인덱스 번호가 붙는다.
// 겹치는 string이 있다 하더라도 가장 앞에있는 값만 출력 
console.log(text.toUpperCase());
console.log(text.toLowerCase());
//입력폼 ---> 입력 ---> DB저장시 소문자 저장
// 입력된 string의 대소문자와 상관없이 대/소문자로 지정하여 치환 및 저장하는 것

//문자열 추출
console.log(text.substring(0, 2)); // 시작 인덱스자릿수부터 end자릿수전까지 추출 (0이상 2미만)
console.log(text.substring(4, 8)); 

console.log(text.slice(0, 2)); 
console.log(text.slice(4)); //범위가 아니라 시작점만 지정하면 이후 문자열을 모두 복사한다
console.log(text.slice(-3)); //-를 붙이면 0번이 아니라 마지막 번호부터 3번째 까지 문자열을 복사한다.
//가까운 인덱스번호를 찾아 효율적으로 ~ 활용하면 좋음 

//문자열 공백 삭제. 자주활용하니 꼭 기억!
text = '            JavaScript              ';
text2 = '            JavaS          cript              ';
console.log(text.trim());
console.log(text2.trim()); //문자열 사이의 공간은 삭제하지 못한다...

//구분자를이용하여 문자열 추출
const fruit ='🍎,🍊,🍏,🍋,🥝';
const fruitArray = fruit.split(',') // ','를 기준으로 속한값들을 object 배열 처리한다. 
//구분자가 없다면 ''에 속한 값이 통으로~ object처리 되기 때문에... 구분자를 넣어주어야 각각 처리 된다.
// 구분자 없을 때: '사과오렌지청사과레몬키위', 구분자 있을 때: '사과', '오렌지','청사과', '레몬', '키위'
console.log(fruit);
console.log(fruitArray);

