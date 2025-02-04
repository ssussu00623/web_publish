// import express from 'express';
// import testRouter from '../router/testRouter.js'

// const server = express();
// const port = 9000;

// /**요청을 처리하는 미들웨어(꼭 외우기) */


// /**
//  * /test로 요청시 ==> Hello~ Test !! 브라우저 출력 후 종료
//  */
// server.use('/test', testRouter); // test로 시작하는 모든 경로를 routing하려면 get이 아닌 use를 활용한다.
// // server.get('/test', (req, res)=>{
// //     res.send('<h1>Hello~ Test !! </h1>')
// //     res.end();
// // });



// /**미들웨어 종료 */
// server.listen(port, ()=>{
//     console.log(`server start===> ${port}`);
    
// });
// // 기본 준비 완... nodemon sercer.js 로 실행
import express from 'express';
import memberRouter from './router/memberRouter.js'
import cors from 'cors';

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;

/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());  


/** 서버의 요청처리를 위한 미들웨어 정의 */
// server.use('/signup');
// signup/1/member 이런식으로 signup 페이지로 늘어나는게 아니기 떄문에... 대표 주소로 주기엔 애매한 감이 있음
server.use('/member', memberRouter);

server.listen(port, ()=>{
    console.log(`server port ===>> ${port}`);    
});