// 종료되는 시점을 알고 있을 때. 종료시점까지 반복한다.
// 보통 사용자가 메뉴를 선택할 때 ~ (특정한 버튼을 눌렀다 등) 사용한다.
/*
while (조건식-무조건 true, flase가 나와야함){
        실행문;
    }
 */
//for문 : 1~5까지 출력
// 3이면 종료
console.log( "----------if 활용법----------");
for (let i =1; i<=5; i++){
    console.log(`i=${i}`);    
}
console.log( "----------브레이크 걸기----------");
for (let i =1; i<=5; i++){
    if(i===3) break;
    console.log(`i=${i}`);    
}

// while문: 1~5까지 출력
// 3이면 종료
console.log( "----------while 사용법----------");
let count =1;
while(count <=5) {
    console.log(`count=${count}`);
    count++; //세미콜론이 있어야 증가가 된다.     
}
console.log( "----------브레이크 걸기----------");
let count2 =1;
while(count2 <=5) {
    if(count2===3) break;
    console.log(`count2=${count2}`);
    count2++; //세미콜론이 있어야 증가가 된다.     
}

console.log( "----------메뉴선택----------");
let flag =true;
let menu = 1;
while (flag) {
    console.log(`1:🍕 \t 2: 🌭 \t 0:종료`);
    if(menu === 1) {
        console.log(`선택하신 메뉴는 🍕입니다.`);
    } flag = false; //while loop 자연스럽게 종료시키려면 ~ false값으로 만들어줘야하니까!
    if(menu === 2) {
        console.log(`선택하신 메뉴는 🌭입니다.`);
    }  flag = false; 
    if(menu === 0) {
        console.log(`선택을 종료합니다.`);
    }  flag = false;
}