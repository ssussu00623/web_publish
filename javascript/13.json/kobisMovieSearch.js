import{kobisMovieList, kobisMovieDetail} from './1_kobisCommons.js';

let mlist = null; // 영화리스트 전역변수 
// 무비리스트이 주소를 갖게하여...  전역변수로 삼는다.

initForm();

function createMovieList(){
    kobisMovieList()
    .then((list)=>{
        const tcount = list.movieListResult.totCnt;
        const length = list.movieListResult.movieList.length;
        const movieList = list.movieListResult.movieList;
        console.log(`tcount-->${tcount}`);
        console.log(`length-->${length}`);
        // list 객체
        mlist = movieList;
        // for(let m of mlist){
        //     console.log(m.movieNm);
            
        // }
    })
    .catch((error)=>console.log(error));
}

function initForm() {
    // KOBIS에서 영화리스트 가져오기
    createMovieList();
    
    let output = `
    <h1>KOBIS 영화검색</h1>
    
    <div>
        <input type= "text" id= "search_title" placeholder="제목을 입력해주세요.">
        <button type = "button" id = "search_button">Search</button>
    </div>
    <div id = "result"></div>
    `;
    document.querySelector("body").innerHTML = output;

    document.querySelector("#search_button")
        .addEventListener('click', ()=>{
            let title = document.querySelector("#search_title");
            if(title.value.trim() === ''){
                alert('영화제목을 입력해주세요');
            title.focus();
        } else {
            searchMovieList(title.value.trim());
        }
    }); //initForm()
}
/**
 * 영화 코드 검색 함수
 */
function searchMovieCd(title){
    let movieCd = '';
    if(mlist !== null){
        let filterMovie = mlist.filter((movie)=> movie.movieNm ===title);
        console.log(`title---> ${filterMovie[0].movieNm}`);
        console.log(`code---> ${filterMovie[0].movieCd}`);
        movieCd = filterMovie[0].movieCd;
    } else {
        console.log('null')
    }
    return movieCd;
    } //searchMoviecode

/**
 * 영화 상세 검색 함수
 */

function searchMovieList(title){
    let movieCd = searchMovieCd(title)
    console.log(`code==>> ${movieCd}`);
    
    kobisMovieDetail(movieCd)
        .then((result)=> {
            console.log(result);
            
            let info = result.movieInfoResult.movieInfo;
            let output = `
            <ul>
                <li>
                    <lable>movieCd</lable>
                    <span>${info.movieCd}</span>
                </li>
                <li>
                    <lable>movieNm</lable>
                    <span>${info.movieNm}</span>
                </li>
                <li>
                    <lable>movieEn</lable>
                    <span>${info.movieNmEn}</span>
                </li>
                <li>
                    <lable>directors ::</lable>
                    `;
            info.directors.forEach((director)=> {
                    output +=`<span>${director.peopleNm} |</span>`;
                    output +=`<span> ${director.peopleNmEn}</span>`;
                });
            output += `<li>
                <lable>actors ::</lable>
                <ul>
                `;
            info.actors.forEach((actor)=>{
                output += `<li><span>${actor.peopleNm} |</span></li>`
                output += `<li><span> ${actor.peopleNmEn}</span></li>`
                });
            output += `
                    </li>
                    </ul>
                </li>
            `;
            document.querySelector("#result").innerHTML=output;
            // console.log(result.movieinforResult.movieInfo.movieNm);
            
        })
        .catch((error)=> console.log(error));
    } //searchMovieList