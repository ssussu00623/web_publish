// 1~6까지 출력
// 3인 경우 for문 빠져나오기
for (let i=1; i<7; i++){
    if (i === 3){
        // break; 바로 빠져나오지만 그 자리에서 빠져나옴.. 
        // 자연스럽게 빠져나오기 위해 i값을 flase로 만들어 빠져나오는 게 안전
        i=10;
    } else {
        console.log(`i = ${i}`);
    }
}