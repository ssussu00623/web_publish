// express 웹 서버 : 웹클라이언트(브라우저) 받아서 처리 한 후 결과 전송
const express = require('express');
const server = express();
/*
    GET / POST 방식으로 요청이 들어오는 처리를 나열
server.get();
server.post();
server.use(); // 뭘로 받는지 모를 때. 
 */
// 브라우저가 접속하는 url - http://localhost:8080/
// path: /(roo)
server.get('/', (req, res)=>{//req :요청 정보(클라이언트 --> 서버), res: 응답정보(서버--> 클라이언트) 
    res.send('<h1>express 서버에서 전송합니다.</h1>');
});

// 브라우저가 접속하는 url - http://localhost:8080/test
// path : /test
server.get('/test',(req, res)=>{
    res.send('<h1>이건 테스트지롱 </h1>');
    console.log('test 전송 완료!!!!');
})
// path: param/홍길동
// http://localhost:8080/param/홍길동 param까지는 루트이지만 홍길동은 데이터로 진행된다.
//'/param/:name' 이렇게 주면 name다음으로 오는 것들은 name이라는 변수에 저장되는 것.
server.get('/param/:name',(req, res)=>{
    // console.log('req', req);
    console.log('name==>', req.params.name);
    res.send(`${req.params.name}`);
})
// server.listen(8080); // http://localhost:8080/
// server.listen(8080, function(){}); 기본 콜백 형태
server.listen(8080, ()=>{console.log('서버 실행 중~');
});
// 애로우 펑션 형태
