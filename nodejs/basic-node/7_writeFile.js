// 파일 관련작업은 비동기식 처리이므로
// 하나의 파일을 읽고, 쓰는 작업만 진행한다면 readFile(), writeFile()
// 여러개의 파일을 순서대로 읽고, 쓰는 작업을 한다면 readFileSync(), writeFileSync()

const fs = require('fs');

// console.log(fs);
/*
    writeFile: [Function: writeFile],
    writeFileSync: [Function: writeFileSync],
*/
// fs.writeFile('파일경로', 데이터, 콜백함수);
fs.writeFileSync('./writeme3.txt', '새로운 글이 작성됩니다.', 
            (err)=>console.log('에러발생!!!'));
const data = fs.readFileSync('./writeme3.txt');
console.log(data.toString());

// sync없이 writeFile과 writeFileSync로 log를 찍으면 비동기와 동기가 충돌(만들어지지 않는데 읽는 작업이 더 빨리 끝나서)
// 해서오류가 출력된다. 
// writeFileSync로 작성이 끝날 때까지 읽는 작업을 멈춰두고 읽게 시키면 충돌 없이 제대로진행되는 걸 확인 가능하다.