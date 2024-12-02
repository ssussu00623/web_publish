import { kmdb } from "../commons";

initForm();

function initForm() {
    let output =`
    <h3>KMDB TEST</h3>
    <div>
        <select id="type">
            <option value="default">선택</option>
            <option value="directer">영화감독</option>
            <option value="title">영화제목</option>
        </select>
        <span>감독/영화배우<input type="text" id="movie_value" placeholder="감독/영화배우 입력"></span>
        <span>영화제목<input type="text" id="movie_title" placeholder="영화제목을 입력해주세요"></span>
        <button type="button" id="search">serch</button>
    </div>
    <div id="result"></div>
    `;
    document.querySelector("body").innerHTML =output;

    document.querySelector("#search")
            .addEventListener('click', ()=>{
                let type = querySelector("#type");
                let movie_value=querySelector("#movie_value");
                let movie_title=querySelector("#movie_title");
                if(type==="default"){
                    alert("선택해")
                } else if(movie_value === ''){
                    alert("넣어")
                } else if(movie_title === ''){
                    alert("넣어라")
                } else {
                    searchMovieResult(type.value, typeValue.value, typeTitle.value);        
                }})
}//initFotm end

function searchMovieResult(type, value, title)
    kmdb(type, value, title)
    .then((result)=> {
        console.log(result);
    })
    .catch((error)=> console.log(error);
    )
