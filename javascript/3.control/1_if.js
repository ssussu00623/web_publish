// 제어문 - 조건문 : if, while, do~while
// if(조건문: 비교연산자포함*무조건 외워야함*){조건식이 참인 경우 실행}
// if(조건식){조건식이 참인경우} else{조건식이 거짓인 경우; }
// 삼항 연산자 : (조건식) ? 참인경우: 거짓인경우; *꼭외우기. 리액트에서 엄청 씀*
//            : true / false 인 경우에만 사용 가능하다.
// if (조건식1){조건식1이 참인경우} else i(조건식2){조건식2가 참인경우}....else {모든 조건식에 해당되지 않을 때}

// 입력되는 과일명이 apple인 경우에만 사과 이모지 출력
// 사과가 아닌 경우에는 이름만 출력

// let fruit ="banana";
// if(fruit === "apple"){
//     console.log('🍎')
// } else {
//     console.log(fruit);
// }

// 위의 조건식을 삼항연산자로 작성해보자.
// let fruit ="apple";
// (fruit === "apple") ? console.log('🍎') : console.log(fruit);

// 삼함연상자의 킥
// 코드를 처리하는 건 일방적이기 때문에 처리 후엔 실행한 값이 사라져 다시 출력할 수 없다. 
// display 변수에 중간 정보를 저장해두면 다시 출력할 수 있다. 
// let display = undefined; 
let fruit ="banana";
(fruit === "apple") ? (display = '🍎') : (display = fruit);
console.log(display)

// 점심메뉴: pizza - '🍕', hotdog - '🌭'
// 요구사항: 각 메뉴를 입력했을 때 해당하는 이모지가 출력하도록 (이렇게 값이 계속 변하니까 변수다.)
// 이항버전
// 조건이 1줄일 때는 {}없이 한 줄씩 사용도 가능하다. 
let lunchMenu = undefined;
lunchMenu ='hotdog'
if (lunchMenu === 'pizza') {
    console.log('🍕'); 
} else {
    console.log('🌭')
};

let choiceMenu = undefined;
(lunchMenu === 'pizza') ? choiceMenu='🍕' : choiceMenu='🌭';
console.log(choiceMenu)

// 학생명이 홍길동, 홍길순, 김영희인지 체크하여 해당하는 경우 이름을 출력하고 해당하지 않는 경우
// "해당학생 없음"으로 출력하기
// 출력포맷: 실행결과===> 로 나타내고 싶을 때. 로그마다 부여할 수도 있지만 result를 활용하여 
// 최종값만 출력할 수 있는 효율적으로 사용할 수 있다. 
let name = undefined;
let result = undefined;
name = '김쑤쑤';
if (name === '홍길동') { 
    // console.log(`실행결과 ===> ${name}`);
    result = name;
    } else if (name === '홍길순') {
        // console.log('홍길순')
        result = name;
    } else if (name === '김영희') {
        // console.log(`실행결과 ===> ${name}`)
        result = name;
    } else {
        // console.log(`실행결과 ===> 해당학생 없음`)
        result = '해당학생 없음';
    }
    console.log(`실행결과 ===> ${name}`);
    
