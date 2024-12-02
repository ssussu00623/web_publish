// {}의 범위가 어디냐에 따라서 글로벌과 로컬이 정해짐
// glodbal 함수 : 함수명으로 호출이 가능
//ex) parsInt(), parseFloat() ... <- 외우씨오
//parseInt(데이터): 데이터를 정수로 변환
//parseFloat(데이터): 데이터를 실수로 변환

let a = "100.10";
a = parseInt(a); //정수
a = parseFloat(a); //실수
console.log(typeof a);
console.log(a);

// uri 인코딩 : ex) http://www.naver.com 
let uri = 'http://www.naver.com';
let encode = encodeURI(uri);
console.log(uri);

//uri 디코딩
let decode = decodeURI(encode);
console.log(decode);
