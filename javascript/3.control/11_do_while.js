/**
 * do~while : while 문의 조건식 체크 전 무조건 최초
 * 실핼하도록 구현하는 로직에 적용함 
    do {
    최초 한 번 먼저 실행되는 실행문;
    } while (조건식을 체크) {
    실행문}
 */
console.log( "----------while의 경우----------");
let flag =false; //보통은 이 값이 false면아무것도 출력되지 않음
let menu = 1;
while (flag) {
    console.log(`1:🍕 \t 2: 🌭 \t 0:종료`);
    if(menu === 1) {
        console.log(`선택하신 메뉴는 🍕입니다.`);
    } flag = false;
    if(menu === 2) {
        console.log(`선택하신 메뉴는 🌭입니다.`);
    }  flag = false; 
    if(menu === 0) {
        console.log(`선택을 종료합니다.`);
    }  flag = false;
}
console.log( "----------do while의 경우----------");
let lunch =false; //보통은 이 값이 false면아무것도 출력되지 않음
let subMenu = 0;

do {
    console.log(`1:🍕 \t 2: 🌭 \t 0:종료`); //여길 일단 먼저 출력하기 때문에... 출력이 된다. 
} while (flag) {
    if(subMenu === 1) {
        console.log(`선택하신 메뉴는 🍕입니다.`);
    } flag = false; 
    if(subMenu === 2) {
        console.log(`선택하신 메뉴는 🌭입니다.`);
    }  flag = false; 
    if(subMenu === 0) {
        console.log(`선택을 종료합니다.`);
    }  flag = false;
}