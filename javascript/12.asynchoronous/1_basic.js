
/*
function a(){
    c(); //return address (복귀 주소)
    console.log(`--->a functuion!!`);
}
function b(){
    console.log(`--->b functuion!!`);
}
function c(){
    b(); //return address (복귀 주소)
    console.log(`--->c functuion!!`);
}
a();
*/
//함수에서 함수이지만 얘도 동기식이다. 복귀 주소가 있을 뿐 실행되는데엔 문제 없음.
function a(){
    c();
    console.log(`--->a functuion!!`);
}
function b(){
    setTimeout(()=>{console.log(`1초 후 setTimeout 함수 실행!!!`);}, 1000); //일단 백그라운드에 보내고 log를 출력한다.
    console.log(`--->b functuion!!`); 
    //이 로그를 먼저 출력하고 setTimeout은 시간이 정해져있든 아니든 백그라운드에 보낸다. 
}
function c(){
    b(); //return address (복귀 주소)
    console.log(`--->c functuion!!`);
}
a();