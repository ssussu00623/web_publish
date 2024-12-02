//구구단 3단~5단까지 출력
// row:1~9, col: 3~5
for (let x=1; x<10; x++){
    let rows = '';
    for (let y=2; y<10; y++){
    rows +=`${y}*${x}=${y*x}\t`}; //+=을 유념하기,... 어떻게 컨닝했는데도 실패했는고 
    console.log(rows);
} 
// 이렇게 시작, 끝 값을 정해서 하면 수정이 쉽다
let start = 4;
let finish = 10;
for (let x=1; x<10; x++){
    let rows = '';
    for (let y=start; y<finish; y++){
    rows +=`${y}*${x}=${y*x}\t`};
    console.log(rows);
} 
/*
 * 별 찍기*/
for(let star =1; star <6; star++){
    let fruit = '';
    for(let color=1; color <= star; color++){ // star과 color값을 따라가게 설정하고 싶다면 꼭 = 부등호를 써야함
        fruit += '*';
        }
    
    console.log(fruit);
} 

// 사과로 찍기
for(let apple =1; apple <6; apple++){
    let fruit = '';
    for(let color=1; color <= apple; color++){
        if(apple === 3){
        fruit += '🍎 \t';
    } else {
        fruit += '🍏 \t';
        }
    }
    console.log(fruit);
} 
