// readme.txt파일을 읽어서 내용을 화면에 출력하는 실습
const fs = require('fs');

// console.log(fs);
// fs.readFile('파일의 경로', 파일을 읽은 후 실행하는 내장함수 :: 콜백함수); 콜백함수는 여기서만 실행하고 사라져서 이름이 없음 (필요 X)
// fs.readFile('',function(){}); or fs.readFile('',()=>{});

fs.readFile('./readme.txt',(err, data)=>{
    if(err) {
        console.log('파일 읽기 실패');
    } else {
    console.log(data);
    console.log(data.toString());
    }
});

/****************promises ver********************/
// readme.txt파일을 읽어서 내용을 화면에 출력하는 실습
const fsp = require('fs').promises

fsp.readFile('./readme.txt')
    .then((data)=>{console.log('fsp---->', data.toString());
    })
    .catch((err)=>{
        console.log(err);
        });