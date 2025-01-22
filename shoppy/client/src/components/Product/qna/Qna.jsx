import React from 'react';
import { useState, useEffect } from "react";
import { SlLock } from "react-icons/sl";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import axios from "axios";

export default function Qna() {
    const [qnaList, setQnaList] = useState([])
    useEffect(()=>{
        axios
        .get("/data/qna.json")
        .then((res)=> setQnaList(res.data))
        .catch(error=> console.log(error))
    }, [])
    console.log(qnaList);
    
    // useEffect(()=>{
    //     fetch("/data/qna.json")
    //     .then(data=> data.json())
    //     .then(jsonData=> setQnaList(jsonData.qnaList))
    //     .catch(error=> console.log(error))
    //     }, [])
    function handleWrite() {
        alert('시스템 점검중')
    }
    function handleOpen() {
        alert('비밀글은 작성자만 열람 가능합니다.')
    }
    return (
        <>
            {/* start cont */}
            <div className="tab_content_area" id='qna'>
            <div className="tab_nav">
                <ul>
                <li><a href="#detail">DETAIL</a></li>
                <li><a href="#review">REVIEW</a></li>
                <li className="on"><a href="#qna">Q&A</a></li>
                <li><a href="#delivery">RETURN & DELIVERY</a></li>
                </ul>
            </div>
                <div className="button_box">
                    <button type="button" 
                    className="qna_button"
                    onClick={handleWrite}>문의 등록</button>
                </div>
                <table className="qna_table">
                    <tbody className="qna_body">
                        {qnaList && qnaList.map((qna)=>
                        <tr className="qna_content">
                            <td className="qna_check"><span className={qna.qna_icon}>{qna.qna_result}</span></td>
                            <td className="qna_title"
                                onClick={handleOpen}>
                                <span>{qna.title}</span>
                                <span><SlLock /></span>
                            </td>
                            <td className="qna_id"><span>{qna.id}</span></td>
                            <td className="qna_date"><span>{qna.date}</span></td>
                        </tr>
                        )}
                    </tbody>
                </table>
                    <ul className="qna_bottom">
                        <li><FiChevronsLeft /></li>
                        <li><FiChevronLeft /></li>
                        <li>1</li>
                        <li><FiChevronRight /></li>
                        <li><FiChevronsRight /></li>
                    </ul>
            </div>
            {/* end cont */}
        </>
    );
}

