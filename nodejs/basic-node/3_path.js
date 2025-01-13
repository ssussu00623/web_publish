const path = require('path');
const string = __filename;//현재 실행중인 파일의 경로


console.log(path.sep);
console.log(string); // 현재 실행 중인 파일 경로 출력
console.log(path.dirname(string));// 현재 실행 중인 파일 경로 디렉토리까지만
console.log(path.extname(string)); // 현재 실행중인 파일명과 확장자
console.log(path.basename(string)); //현재 실행중인 파일의 이름
console.log(path.basename(path.extname(string))); //현재 실행중인 파일의 확장자 명만


console.log(path.dirname(string), path.join('/images')); 
//C:\dev\web_publish\nodejs\basic-node \images
// 이미지 경로 추가 



