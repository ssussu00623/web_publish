// fetch (resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
// 리턴 방식은 다르지만 fetch와 axios는 비슷.. 둘 다 활용하게 될 거라는 걸 알아두자

// 발급받아둔 키 c776b0e8bcde13c8da23d7909cd5cdae

// kovis 일별 박스오피스
let key = `c776b0e8bcde13c8da23d7909cd5cdae`;
let target = `20241121`;
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;


//Response 객체 
fetch(url) //이 주소를 통해요청하고
    .then((response)=> {colsole.log(response)}) //성공한 값
    .catch((error)=> {console.log(error);}) //에러가 나면 에러값을 반환~
    
    /*
    Response {
    status: 200, // status가 성공하면 200이 뜬다. 실패는 400, 500(400대 에러를 표현(404, 403처럼), 500대도 마찬가지)
    statusText: 'OK',//오류 번호 뿐만 아니라 여기서도 알려줌 
    headers: Headers { // 여긴 트렁크 주소택처럼 정보값을 알려준다. 
    date: 'Fri, 22 Nov 2024 01:32:06 GMT',
    'content-type': 'application/json;charset=UTF-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive', // 요청이 올 때까지 기다리는 중.
    server: '.',
    'access-control-allow-origin': '*'
    },
    body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
    bodyUsed: false,
    ok: true,
    redirected: false,
    type: 'basic',
    url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c776b0e8bcde13c8da23d7909cd5cdae$targetDT=20241121'
    }
    */

//2. Json 데이터 가져오기
//fetch는 비동기식
let result = await fetch(url); // JSON 객체가 문자열 데이터타입으로 가져옴
let jasonData = await result.json(); // .json()함수를 통해 json객체 타입 변환 
//fetch는 비동기식이고 순차적으로 해결해야한다... 
//resut와 jasonData를 동시에 묶어 진행해야 하는 특수한 비동기식 이기 때문에 awit를 붙어준다.
//fetch가 될 때까지 콜스택이 다 기다렸다 실행하도록 한다. 
console.log(`type=>${jasonData.boxOfficeResult.boxofficeType}`);
console.log(`range=>${jasonData.boxOfficeResult.showRange}`);
console.log(`rankList=>${jasonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`); // 인덱스랑 똑같다. 0번자리 정보를 끌어오기 
console.log(`rankList=>${jasonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm}`);
/*
{
  boxOfficeResult: {
    boxofficeType: '일별 박스오피스', 대소문자 구별 필수 
    showRange: '20241121~20241121',
    dailyBoxOfficeList: [ jsonData가 자동으로 ㅇ정렬
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
  */


