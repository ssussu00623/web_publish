import express from 'express';
import testRouter from '../router/testRouter.js'

const server = express();
const port = 9000;

/**요청을 처리하는 미들웨어(꼭 외우기) */


/**
 * /test로 요청시 ==> Hello~ Test !! 브라우저 출력 후 종료
 */
server.use('/test', testRouter); // test로 시작하는 모든 경로를 routing하려면 get이 아닌 use를 활용한다.
// server.get('/test', (req, res)=>{
//     res.send('<h1>Hello~ Test !! </h1>')
//     res.end();
// });



/**미들웨어 종료 */
server.listen(port, ()=>{
    console.log(`server start===> ${port}`);
    
});
// 기본 준비 완... nodemon sercer.js 로 실행
