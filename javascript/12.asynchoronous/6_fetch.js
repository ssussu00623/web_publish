//API의 promise 리턴값 확인 후 호출
//fetch(resource-"네트워크로 접속할 서버의 주소: url") 
const url =`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101`
fetch(url) //resolve(result), reject(error) 
    .then((result)=> {console.log(`result==> ${result}`);}) // 비동기 처리이며 전담자가 생긴다. 전담자가 있어서 자동으로 에러값을 넘김
    .catch((error)=> {console.log(`error==> ${error}`);}); // 받아서 송출 ~
    // api 사이트가 오류인 상태라 사이트 자체는 오류이지만...(비공개처리해서) 오류인 결과를 정상 출력
    //result==> [object Response] 로 출력된다.
    //에러상태에선 error==> TypeError: fetch failed 이렇게 뜬다.