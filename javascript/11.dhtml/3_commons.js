/**
 * 공통 모듈 저장 파일 
 * 어디서든 모두가 사용할 수 있도록 export를 붙여준다.
 * import되어있다면 활용 가능한 함수가 된다.
 */

/* sum() */
export function sum(number1, number2){
    return parseInt(number1)+parseInt(number2);
} 
/*
export default function sum(number1, number2){
    return parseInt(number1)+parseInt(number2);
} 이렇게 default를 줄 수도 있다. default는 가장 많이 호출되는 모듈에 보통 붙이고 1개에만 붙일 수 있다. 
붙일 경우 import에서 {}에 감싸지 않아도 호출 된다.(반대로말하면 import에는 무조건 {}가 붙는다는 것)
*/

//문자일지 모르니 받아서 숫자로 넣고 값을 리턴함
/* sub() */
export function sub(number1, number2){
    return parseInt(number1) - parseInt(number2);
}
/* mul() */
export function mul(number1, number2){
    return parseInt(number1) * parseInt(number2);
}
/* div() */
export function div(number1, number2){
    return parseInt(number1) / parseInt(number2);
}