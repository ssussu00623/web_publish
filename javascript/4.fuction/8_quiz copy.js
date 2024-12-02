//구구단을 출력하는 함수 정의
// gugudan(srart, end) 
/*
기본 함수 형식 : 1 ~ 9단 출력
*/
function gugudan(start, end){
    for(let row=1; row<10; row++){
        let output = '';
        for(let col=1; col<10; col++) {
        output += `${col}*${row}=${row*col}\t`;
    } 
    console.log(output);
}
} 
gugudan();
/*
구구단 선택 함수 형식 : start~end 출력
- 입력되는 start는 0보다 커야한다. 
- end는 10단 이상은 출력되지 않도록 한다. 
*/
function selectGugudan(start, end){
    for(let row=1; row<10; row++){
        let output = '';
        for(let col=start; col<=end; col++) {
        output += `${col}*${row}=${row*col}\t`;
    } 
    console.log(output);
}
} 
selectGugudan();
/*
구구단 싱글 선택 함수 형식 : single 단 출력
입력되는 매개변수는 0보다 커야한다. 
*/
function singleGugudan(dan){
    for(let row=1; row<10; row++){
        let output = '';
        console.log(output += `${dan}*${row}=${dan*row}`);
    }
} 
singleGugudan(3);
selectGugudan(7,11);
gugudan();
//fruitsTower 함수 생성 입력된 과일에따라 타워를 생성한다. 
//fruitsTower('🍎')

function fruitsTower(emoji, floor){
    for(let x=1; x<=floor; x++){
        let rows= '';
        for (let y=1; y<=x; y++){
            rows += emoji;
        }
        console.log(rows); //이 위치 잘 확인하기... 다 맞았는데 여기서 ㅠㅠ
    } 
} 

fruitsTower('🥝',5)
fruitsTower('🍎',5)