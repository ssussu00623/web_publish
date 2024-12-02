// 비동기식 처리 방식에서 callback 함수 호출
// runInDelay(callback, delay)

function runInDelay(callback, seconds){
    setTimeout(callback, seconds); // 백그라운드에 옮겨둔다.
}

runInDelay(function(){console.log(`타이머 3초 경과`)}, 3000);
runInDelay(()=>{console.log(`타이머 1초 경과!!`);}, 1000);
console.log(`---프로그램 종료`); //동기 함수라 얘가 제일 먼저 출력 됨 (콜스텍에서 바로 출력됨)

//백그라운드에 있다가 ~ 1초 결과 후 콜백Q에 갔다가~ 이벤트 루프의 호출에 쓩~
/**
 * 실행은 3초 함수가 먼저 되어 백그라운드에 먼저들어간다. 
 * 다음에 1초 함수가 실행되어 백그라운드에 들어간다. 
 * 각 시간이 경과되는대로 후 콜백Q에 들어간다. 1초 함수가 먼저 들어가는 것. 
 * 이벤트 루프는 항상 실행되기 때문에 1초 경과가 먼저 출력된다.
 * 콜백Q에서 각각 출력되고~ 백그라운드와 콜백Q가 다 비어있고나서야 프로그램이 종료된다. 
 */