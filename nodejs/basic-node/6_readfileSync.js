// fs파일을호출한 후 순서대로 readme.txt와 readme2.txt파일을 순서대로 읽어서 출력하세요
// readFile()함수를 이용하는 경우는 동기식 처리이므로 순서가 다를 수 있다.
// 비동기식 순서를 지켜야하는 코드 ==> readFileSync()
/*
const fs = require('fs');
fs.readFileS('./readme.txt', (error, data)=>{
    if(error){
        console.log('readme.txt 파일 읽기 실패');
    } else {
        console.log(data.toString());
    }
});

fs.readFile('./readme2.txt', (err, text)=>{
    if(err){
        console.log('readme2.txt 파일 읽기 실패');
    } else {
        console.log(text.toString());
    }
});
*/
// 비동기식 순서를 지켜야하는 코드 ==> readFileSync()
// 이렇게 진행하면 무조건 순차적으로 결합 실행 된다. 

const fs = require('fs');
let data = fs.readFileSync('./readme.txt')
console.log('readme.txt', data.toString());

data = fs.readFileSync('./readme2.txt')
console.log('readme2.txt==>', data.toString());