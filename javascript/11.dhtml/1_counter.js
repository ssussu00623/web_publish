//counter 증가/감소
function counter(flag){ // 청기백기ㅠㅠ 하듯이 뭐가 올지 넣어줌
    let number = document.querySelector("#number").textContent;
    if(flag === 'increment'){
        document.querySelector("#number").textContent = ++number;
    } else {
        let number = document.querySelector("#number").textContent;
        if(number>0)
        document.querySelector("#number").textContent = --number;
    }
    
}


//counter 증가
function increment() {
    // alert('증가')
    let number = document.querySelector("#number2").textContent;
    //text 태그들을 가져올 때 textContent를 사용해야한다. 
    //우리는 div로 만들어서...
    // let number2 = document.querySelector("#number2").value;
    //input 때는 value
    // console.log(++number/*, number2*/);
    if(number<10)
        document.querySelector("#number2").textContent = ++number;
        // 0이라는 값을 태그하고 얘를 증가시킬거라고 선언을 해야한다. 
        // 그냥 ++만하면 어디를 증가시켜야할지 모르는 애라 계속 0이다.
}


//counter 감소
function decrement(){
    // alert('감소')
    let number = document.querySelector("#number2").textContent;
    if(number>0)
        document.querySelector("#number2").textContent = --number;
} 