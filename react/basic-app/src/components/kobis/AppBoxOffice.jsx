import BoxOffice from './BoxOffice.jsx'
import './BoxOffice.css';
import { useEffect, useState } from "react";

export default function AppBoxOffice(){
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
    
        useEffect(()=>{
        const key = `c776b0e8bcde13c8da23d7909cd5cdae`;
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;
        fetch(url)
            .then(data => data.json())
            .then(daily=>setDailyBoxOffice(daily.boxOfficeResult.dailyBoxOfficeList))
            .catch((error)=> console.log(error))
    }, []);

    return(
        <>
            <h1>KOBIS BoxOffice</h1>
            <div className="title">
            <BoxOffice
                rank = "순위"
                title = "제목"
                openDt = "개봉일"
                cnt = "당일관객수"
                total = "누적관객수"
                amt = "누적매출액" 
                type = "title"
                />
            </div>

                <div className="content">
                {dailyBoxOffice.map(boxoffice=>
                <div className="rank">
                <BoxOffice 
                    rank = {boxoffice.rank}
                    title = {boxoffice.movieNm}
                    openDt = {boxoffice.openDt}
                    cnt = {boxoffice.audiCnt}
                    total = {boxoffice.audiAcc}
                    amt = {boxoffice.salesAmt} 
                    type = "content"
                    />
                </div>
                )}
                </div>
                <p>
            {/* <table border='1'> 
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>당일관객수</th>
                        <th>누적관객수</th>
                        <th>누적매출액</th>
                    </tr>
                </thead>
                <tbody>
                    />
                    // <tr>
                    //     <td>{boxoffice.rank}</td>
                    //     <td>{boxoffice.movieNm}</td>
                    //     <td>{boxoffice.openDt}</td>
                    //     <td>{boxoffice.audiCnt}</td>
                    //     <td>{boxoffice.audiAcc}</td>
                    // </tr>
                    )} 
                </tbody>
                <tfoot></tfoot>
            </table>*/}
            </p>
        </>
    );
}
