// 제어문 - 조건문 : switch(조건) ~ case
/*
    switch (숫자, 문자리터럴) {
        case 숫자/문자리터럴 :
            실행문;
            break;
        case ~~
            실행문;~~
            break;~~
        default :
            실행문;
    }
*/
// 0: 월요일, 1: 화요일, 2: 수요일 ... 
let ueage = `[0]: 월요일, [1]: 화요일, [2]: 수요일, [3]: 목요일...;`
let day = 0;
let resultay = undefined;
switch(day){
    case 0:
        resultay = "월요일"; break;
    case 1:
        resultay = "화요일"; break;
    case 2:
        resultay = "수요일"; break;
    case 3:
        resultay = "목요일"; break;
    case 4:
        resultay = "금요일"; break;
    case 5:
        resultay = "토요일"; break;
    case 6:
        resultay = "일요일"; break;
    default:
        console.log(`사용법: ${ueage}`);
}
if(!(resultay === undefined)) {
    console.log(`선택한 요일은 [${resultay}] 입니다.`);
}

// undefind가 같이 출력되지 않도록 로그 값에도 if를 주었다 ! =/=같은게 없기 때문예~ ===에 !(not)을 주는 것.

// 1. 숫자 입력받기
// 2. 숫자 체크 (짝/홀) 결과에 따라값 출력
// 3. 값 출력

let number = 100;
let result = undefined;
switch (number%2) {
    case 0 :
        result = '🍎';
        break; // 브레이크가없다면 자동 패스된다! 필요한 곳에 꼭브레이크를 넣도록!
    case 1 :
        result = '🍏';
        break;
    default : 
        result = '해당 과일 없음';
}

console.log(result);

// 이렇게 값이 홀수/짝수처럼 이외의 값이 나올 확률이 0%일 때는 비효율적이기 때문에
// 상황에 따라 골라쓰는 것이 좋음.