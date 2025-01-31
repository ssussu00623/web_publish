import express from 'express';
import testRouter from '../router/testRouter.js'
const server = express();
const port = 9000;

// server.get('/', (req, res)=>{
//     res.send('<h1>홈화면</h1>')
//     res.end();
// })
server.use('/test', testRouter)

server.listen(port, ()=>{
    console.log(`server start====> ${port}`);
    
})