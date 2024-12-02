window.addEventListener("DOMContentLoaded", (event)=> {
    creatNoticeList(event);
})

/*****************************
 *      게시판 작성     *
 *****************************/
creatNoticeList();

function creatNoticeList(){
    fetch("../data/notice.json")
    .then((result)=>result.json())
    //fetch 실행 결과 => result (문자열)=> json 변환 작업
    .then((jsonData)=> {
        showNoticeList(jsonData.list)
    })
    .catch(error => console.log(error))
} //creatNoticeList end

/*****************************
 *      필터링 작업      *
 *****************************/
function onChangNoticeList(code){
    alert(code);
    // 1.list 배열에서 코드를 필터링 새로운 배열반환
    fetch("../data/notice.json")
    .then((result)=> result.json())
    .then((jsonData)=> {
        if(code === "total"){
            showNoticeList(jsonData.list)
        } else {
        let filterList = jsonData.list.filter((object)=> (object.code) === code);
        // return 안 붙이려면 ~ 한 줄로 적어주고 {}도 없어야함... 자꾸만 실수실수~
        showNoticeList(filterList)
        }
    })
    .catch(error => console.log(error));
}

/*****************************
 *      화면출력 작업      *
 *****************************/
function showNoticeList(list){
    let output = `
        <thead>
            <tr>
                <th>번호</th>
                <th>구분</th>
                <th>제목</th>
                <th>등록일</th>
                <th>조회수</th>
            </tr>
        </thead>`
        list.forEach((notice, i) => {
            output += `
            <tr>
                <td>${i+1}</td>
                <td>${notice.type}</td>
                <td>${notice.title}</td>
                <td>${notice.date}</td>
                <td>${notice.hits}</td>
            </tr>`
        });
        output +=`
            <tfoot>
                <tr>
                    <td colspan="5"> 1 2 3 4 5 > ></td>
                </tr>
            </tfoot>
        `
        document.querySelector("table").innerHTML = output;
}