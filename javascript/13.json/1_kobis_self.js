// 
import {kobisBoxOffice as boxoffice} from './1_kobisCommons.js'; 

/* 
    함수 이름이 너무 길다 느낄 때 as를 사용하여 이 파일 내에서만 활용할 수 있다. 
    import {kobisBoxOffice} from './1_kobisCommons.js'; < - 원문은 이쪽 ! 
*/

initForm();

function initForm (){
    const output = `
    <h1> 일별 박스 오피스 </h1>
    
    <div id="search">
        <select id = "type">
            <option value="default"> 선택 </option>
            <option value="Daily"> 일별 </option>
            <option value="Weekly"> 주간/주말 </option>
        </select>
        <input type="text" id="searchDt" placeholder="공백 없이. 예시)20241122">
        <button type="button" id="searchBtn">search</button>
    </div>
    <div id="result"></div>
    `;  // function searchBoxOffice(searchDt) 내용이 div 에 들어가게 된다.

    document.querySelector("body").innerHTML = output;
    // 이벤트는 실행한 다음에 주어야한다. 브라우저 내부의 틀이 만들어지기 나올 수 없음 
    // 기본 박스 오피스 화면 출력: 20240101
    searchBoxOffice('Daily','20240101');


    /**서치 버튼 이벤트를 추가 */
    /*
    document.querySelector("#searchBtn").addEventListener();
    */
    let searchButton = document.querySelector("#searchBtn");
    searchButton.addEventListener('click', ()=> {
        //searchDt입력창 박스오피스 타입의 유효성 체크
        let type = document.querySelector('#type');
        let searchDt = document.querySelector('#searchDt');
        
        if(type.value === 'default'){
            alert('박스오피스 타입을 설정해주세요.')
            type.focus();
        } 
        else if(searchDt.value === '') {
            alert('날짜를 입력해주세요.');
            searchDt.focus();     
        }  else {
        //일별&주간/주말 박스오피스 정보 화면 출력
        searchBoxOffice(type.value, searchDt.value);
        }
    });
} // end of initForm




/**
 * 일별 박수 오피스 정보 화면 출력
 */

function searchBoxOffice(ktype, searchDt){
    boxoffice(ktype, searchDt) // promise 객체로 리턴
        .then((result)=>{
            const rankType = ktype.toLowerCase(ktype);
            console.log(`rankType=${rankType}`);
            
            const type = result.boxOfficeResult.boxofficeType;
            const range= result.boxOfficeResult.showRange;
            //ktype을 체크하여 Daily, Weekly 구분
            
            let rankList = null;
            let posterList = [];
            if(ktype === 'Daily'){
                rankList = result.boxOfficeResult.dailyBoxOfficeList; 
            } else if (ktype === 'Weekly'){
                rankList = result.boxOfficeResult.weeklyBoxOfficeList; 
            }
            //레퍼런스 하는 객체 주소에 `${}`는 문자열이라 사용 불가능..  . if로 체크해야함....  
            // rankList = JSON.parse(rankList);
            //포스터 가져오기
            rankList.forEach((element)=>{
                let movieNm = element.movieNm;
                let openDt = element.openDt.replaceAll('-','');
                posterList.push(getposter(movieNm, openDt));
                
            });
            // console.log(posterList.length);
            
            Promise.all(posterList) //비동기식 처리는 모두 종료가 되도록 실행
                .then((poster)=> {
            let output =`
                <h3>박스오피스 타입:${type} </h3>
                <h3>박스오피스 일자:${range} </h3>
                <table border = 1>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>당일관객수</th>
                        <th>누적관객수: </th>
                    </tr>
            `;
            rankList.forEach((element, i) => {
                output += `
                    <tr>
                    <td>${element.rank}</td>
                    <td><img src=${poster[i]} width="100px" class="poster" 
                                id="${element.movieNm},${element.openDt.replaceAll("-",'')}">${element.movieNm}</td>
                    <td>${element.openDt}</td>
                    <td>${element.audiCnt}</td>
                    <td>${element.audiAcc}</td
                    </tr>
                    `;
            });
            output += `</table>` ;
            //모든 작업이 끝나고 테이블을 닫는 것! foreach에서 닫으면 닫으며 10번반복이니 주의
            // console.log(output);

            //테이블 화면 출력
            document.querySelector("#result").innerHTML = output;
            // let resultOutput = document.querySelector("#result");
            // resultOutput.remove();
            // console.log(typeof resultOutput);
        
            // let div = document.querySelector("#search");
            // div.insertAdjacentHTML('afterend', output);
            
                
            //이지미 클릭 이벤트
            const images = document.querySelectorAll(".poster");
            images.forEach((image)=> image.addEventListener('click', onMovieDetail));
            //{}를 더 붙이면 return을 붙여야하니 한 줄로간단하게.....

        }).catch();

        
        })
        .catch();
}
// end of boxoffice
