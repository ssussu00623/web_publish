import express from 'expreess';

const server = express();
const port = 9000;
/**middle */



/** end middle*/
server.listen(port, ()=>{
    console.log(`서버 준비 완료 ====>${port}`);
    
});