/**
 * KOBIS 박스오피스 정보 호출 함수
 */
export async function kobisBoxOffice(type, searchDt) {
    const key = `c776b0e8bcde13c8da23d7909cd5cdae`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
    // console.log(url); 
    
    
    let kobis = await fetch(url);
    let jsonData = await kobis.json(); // json으로바꿔야만 레퍼런스가능 
    
    
    return jsonData;
    //키 값을 가지고, url에가서, fetch로 url의 json형태로 가져오게 한 것. await로 순서를 지키게 했다. 
}

/**
 * KOBIS 영화리스트 호출 함수(가져오기)
 */
export async function kobisMovieList() {
    const key = `c776b0e8bcde13c8da23d7909cd5cdae`;
    const curPage = 1;
    const itemPerPage = 100;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`;
    //json 형태로 가져올 수 있는 데이터... rest api
    
    const movieList = await fetch(url);
    //비동기처리를 순차를 지켜서 처리하고 싶음. async 와 await지키기
    
    const jsonData = await movieList.json();
    
    return jsonData;
}


/**
 * KOBIS 영화 정보 상세 호출 함수(가져오기)
 */
export async function kobisMovieDetail(movieCd) {
    const key = `c776b0e8bcde13c8da23d7909cd5cdae`;
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    //json 형태로 가져올 수 있는 데이터... rest api
    
    const movie = await fetch(url);
    //비동기처리를 순차를 지켜서 처리하고 싶음. async 와 await지키기
    const jsonData = await movie.json();
    
    return jsonData;
}

/**
 *  포스터 검색
 */
export async function searchMoviePoster(movieNm, openDt) {
    const key = 'S8R5Q18G2QM4U5UKA922';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    
    return jsonData.Data[0].Result[0].posters.split("|")[0];
}


//상세정보

export async function kmdbMovieDetail(movieNm, openDt) {
    const key = 'S8R5Q18G2QM4U5UKA922';
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}&releaseDts=${openDt}`;
    url += `&ServiceKey=${key}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    
    return jsonData;
}

