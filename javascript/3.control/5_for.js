// 제어문 - 반복문 : for
// for  : 정확한 반복 횟수를 알고 있을 때 <--> Array (배열)
//  ㄴ 둘이 서로 같이 등장하는 편. for가 가면 Array가 간다고 보면된다.
/* for((1)초기값(선언문) ; (2)조건식 ; (4)증감식(++,--)) {
        (3)조건식이 true인 경우 실행;
    } (5)조건식이 flase라면 빠져나온다. 

    1.초기값을 선언한다. ---> 초기값 변수는 for블록에서만 실행
    2. 선언한 변수는 조건식을 통해 비교한다. ---> boolean 타입의 결과
    3. (2)번의 결과가 true이면 실행문을 실행한다. 
    4. 실행문이 종료되면, 증감식을 실행한다. 
    (2)~(4)번까지 반복해서 작업을 실행한다.
    5. 조건식이 false가 되면 for 루프 블록을 빠져나온다.
*/

// 숫자 1부터 5까지 반복해서 출력해주세요.
// console.log로 5줄을 해도되지만 효율적으로 해보기 위해 for을 쓴다.
for(let i = 1; i < 6/*or i <= 5*/; i++){
    console.log(i);
}

// 숫자 배열을 출력해보세요
// let=i는 for문 안에서반복되기 때문에 다른 for문에서i를 써도 되긴 하다.
let numberlist = [1,2,3,4,5];
for( let i=0; i <= 4; i++) {
    console.log(numberlist[i]);
}

let menulist = ['🍕','🍔','🍟','🌭','🍿'];
//배열의 마지막 인덱스 주소는 배열 크기 -1.(0부터시작하니까)
//배열의 크기 구하는 형식 : 배열객체.length
for( let i=0; i <= 4; i++) { // 0~4는 인덱스 번호 
    console.log(menulist[i]);
}
/* ------------------------------------------- */
// 배열의 개체 수를 편하게 알 수 있는 방법.
console.log(`menulist.length=${menulist.length}`);
//이렇게 알아낸 경우 for( let i=0; i <= menulist.length-1 ; i++) 이렇게 작성할 수도 있다. 


for( let i=0; i <= menulist.length-1 ; i++) {
    console.log(menulist[i]);
}
// 초기값이 0이라면 ++i가 된다 초기값에 더한 상태에서 증가하니깐

//length를 따로 저장하고 과일리스트 출력
let fruitlist = ['apple', 'orange', 'lemon']
let length = fruitlist.length-1;
for(let k=0; k<=length; k++) {
    console.log(fruitlist[k]);
}

// 레몬만 출력하고 싶을 때 
let fruitlist2 = ['apple', 'orange', 'lemon']
let length2 = fruitlist2.length-1;
for(let k=0; k<=length2; k++) {
    if(fruitlist2[k]=== 'lemon')
    console.log(fruitlist[k]);
}
// 이모지도 같이 출력
let fruitlist3 = ['apple', 'orange', 'lemon']
let length3 = fruitlist3.length-1;
let emoji =['🍎','🍊','🍋']
for(let j=0; j<=length3; j++){
    let fruit = fruitlist3[j];
    let mark = emoji[j];
    if(fruit === 'lemon')
        console.log(fruitlist3[j],mark);
}

// while : 종료하는 시점을 정확하게알고 있을 때. <--> true, false 값을 통해 체크

