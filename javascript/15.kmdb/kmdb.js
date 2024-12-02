
initForm();
import{kmdb} from './commons.js';


function initForm(){
    let output = `
        <h1>KMDB API</h1>
        <div>
            <select id="type">
                <option value="default">선택</option>
                <option value="director">영화감독</option>
                <option value="actor">영화배우</option>
            </select>
            <label>영화제목</label>
            <input type="text" id="type_value" placeholder="감독/영화배우 입력">
            <input type="text" id="type_title" placeholder="영화제목을 입력해주세요">
            <button type="button" id="search">search</button>
        </div>
        <div id="result"></div>
    `;//output end
    document.querySelector("body").innerHTML =output;

    //button event 이벤트 출력은 document 출력 이후여야함~
    document
    .querySelector("#search")
    .addEventListener('click', ()=>{
        let type = document.querySelector("#type");
        let typeValue = document.querySelector("#type_value");
        let typeTitle = document.querySelector("#type_title");
        if(type.value === "default"){
            alert("타입을 선택해주세요.")
            type.focus();
        } else if(typeValue.value === ''){
            alert('감독/배우를 입력해주세요.')
            typeValue.focus();
        } else if(typeTitle.value.trim() === ''){
            alert('영화제목을 입력해주세요.')
            typeTitle.focus();
        } else {
            searchMovieResult(type.value, typeValue.value, typeTitle.value);        //KMDB에서 API 연동 후 출력화면
        }
        //validation check (유효성 체크)
    });
}//initForm end

//KMDB에서 API 연동 후 출력화면
function searchMovieResult(type, value, title){ 
    /**검색결과 출력 Promise --> 화면 */
    kmdb(type, value, title)
        .then((result)=> {
            let count = result.TotalCount;
            let output = ``;
            let actorFive = []; //actor객체가 {}에 담겨있어 배열로 받기 if블럭 밖에서도 사용할 수 있게 넣어둔다
            let actorAll = [];
            if(count){
                let info = result.Data[0].Result[0];
                let directors = result.Data[0].Result[0].directors.director[0];
                let actors = result.Data[0].Result[0].actors.actor;
                let posterArray = result.Data[0].Result[0].posters.split("|");
                let stillArray = result.Data[0].Result[0].stlls.split("|");
                let staff = result.Data[0].Result[0].staffs.staff;
                // let posterArray = posters.split("|");
                // let stllArray = stlls.split("|");
                actors.forEach((actor, i)=>{
                    if(i<5) actorFive.push(actor.actorNm)});
                actors.forEach((actor)=>{
                    actorAll.push(actor.actorNm)});
                
                output +=`
                    <div class="container">
                    <div class="container-content">
                    <h3>${info.title.replaceAll('!HS','').replaceAll('!HE','')}</h3>
                    
                    <h5>${info.titleEng} - ${info.prodYear}년 </h5>
                    <hr>
                    <p>${info.type} | ${info.rating} | ${info.nation} | ${info.runtime}분 | ${info.repRlsDate}(개봉)</p>
                    <p><span>제작사 :: </span><span>${info.company}</span></p>
                    <p><span>감독 :: </span><span>${staff[0].staffNm}</span></p>
                    <p><span>출연 :: </span><span id="actors">${actorFive.join()}</span>
                    <button type="button" id="more_actors">더보기</button>
                    <button type="button" id="close_actors" style="display:none">접기</button></p>
                    </div>
                    <div class="container-img">
                        <img src="${posterArray[0]}" alt="">
                    </div>
                    </div>
                    <div class="container-stills">
                    `;
                stillArray.forEach((still) => {
                    output += `<img src="${still}">`;
                });
                output += `</div>`;
            } else {
                output+= `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`
            }
            document.querySelector("#result").innerHTML = output;
                /**더보기 버튼 이벤트*/
                //more_actors 더보기 버튼 이벤트
                document.querySelector("#more_actors")
                .addEventListener('click', ()=>{
                    document.querySelector("#actors").textContent = actorAll.join();
                    document.querySelector("#more_actors").style.display="none";
                    document.querySelector("#close_actors").style.display="inline-block";
                })
            //close_actors 더보기 버튼 이벤트
            document.querySelector("#close_actors")
            .addEventListener('click', ()=>{
                document.querySelector("#actors").textContent = actorFive.join();
                document.querySelector("#more_actors").style.display="inline-block";
                document.querySelector("#close_actors").style.display="none";})
        })
        .catch((error)=> console.log(error));

}