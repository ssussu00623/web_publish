// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합
/*
export function gugudan(){~}
이렇게사용하면 js파일 밖에서도 사용 가능하다.
*/
//export 키워드를 전역에서 사용할 수 있도로고 함. 
/*
기본 함수 형식 : 1 ~ 9단 출력
*/
/*
export function gugudan(){
    for(let row=1; row<10; row++){
        let output = '';
        for(let col=1; col<10; col++) {
        output += `${col}*${row}=${row*col}\t`;
    } 
    console.log(output);
}
} 
/*
구구단 선택 함수 형식 : start~end 출력
- 입력되는 start는 0보다 커야한다. 
- end는 10단 이상은 출력되지 않도록 한다. 
// */
// export function selectGugudan(start, end){
//     for(let row=1; row<10; row++){
//         let output = '';
//         for(let col=start; col<=end; col++) {
//         output += `${col}*${row}=${row*col}\t`;
//     } 
//     console.log(output);
// }
// } 
// /*
// 구구단 싱글 선택 함수 형식 : single 단 출력
// 입력되는 매개변수는 0보다 커야한다. 
// */
// export function singleGugudan(dan){
//     for(let row=1; row<10; row++){
//         let output = '';
//         console.log(output += `${dan}*${row}=${dan*row}`);
//     }
// } 
// //fruitsTower 함수 생성 입력된 과일에따라 타워를 생성한다. 
// //fruitsTower('🍎')

// export function fruitsTower(emoji, floor){
//     for(let x=1; x<=floor; x++){
//         let rows= '';
//         for (let y=1; y<=x; y++){
//             rows += emoji;
//         }
//         console.log(rows);
//     } 
// } 

