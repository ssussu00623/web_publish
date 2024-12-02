// window.addEventListener('DOMContentLoaded', function(){
    // dcalForm();});

//인포트는언제나 가장 위에서!

import {sum, sub, mul, div} from './3_commons.js'

//DHTML 형식으로 계산기 프로그램
initForm();

/*계산기 폼을 생성하는 함수*/
function initForm (){
    let output = `
        <h1>계산기</h1>
    <div class="calculater">
        <ul>
            <li>
                <input type="text" id="number1" placeholder="첫번째 숫자">
                <input type="text" id="number2" placeholder="두번째 숫자">
            </li>
            <li>
            <button type="button" class="button" data-operation="sum"> ➕ </button>
            <button type="button" class="button" data-operation="sub"> ➖ </button>
            <button type="button" class="button" data-operation="mul"> ✖ </button>
            <button type="button" class="button" data-operation="div"> ➗ </button>
            </li>
            <li>
                <h3 id="result"> Result :</h3>
            </li>
        </ul>
        
    </form>
    `;
    /*화면 출력 */
    document.querySelector("#content").innerHTML = output;
    
    /*버튼 이벤트 처리 */
    let buttonList = document.querySelectorAll(".button");
    console.log(buttonList);
    
    buttonList.forEach((button)=>{
        
        button.addEventListener('click', ()=>{
            let number1 = document.querySelector('#number1').value; 
            let number2 = document.querySelector('#number2').value;
                    //input타입은 value까지 주어야함!.
                    
        let result = 0;
        let operation = button.dataset.operation;
        
        switch(operation) {
            case 'sum': result = sum(number1, number2); break;
            case 'sub': result = sub(number1, number2); break;
            case 'mul': result = mul(number1, number2); break;
            case 'div': result = div(number1, number2); break;
        }
        
        console.log(`result => ${result}`);
        document.querySelector("#result").textContent=`Result : ${result}`;
    });
    /*
    //button.addEventListener('이벤트 종류', 이벤트 실행 콜백함수);
    // 자바스크립트기 때문에 click(파라미터값)이고 html은 함수 실행이기 때문에 onclick이어야함*/
    });



} //initForm

/*
모두 활용할 수 있도록 commons파일에 export 로 만들어준다
독립시킨 것... 
*/
/*
// sum()
function sum(number1, number2){
    return parseInt(number1)+parseInt(number2);
} 
//문자일지 모르니 받아서 숫자로 넣고 값을 리턴함
// sub()
function sub(number1, number2){
    return parseInt(number1) - parseInt(number2);
}
// mul()
function mul(number1, number2){
    return parseInt(number1) * parseInt(number2);
}
// div()
function div(number1, number2){
    return parseInt(number1) / parseInt(number2);
}*/