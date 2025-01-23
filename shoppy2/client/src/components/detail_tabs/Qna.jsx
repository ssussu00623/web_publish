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
            {/* <div className="tab_nav">
                <ul>
                <li><a href="#detail">DETAIL</a></li>
                <li><a href="#review">REVIEW</a></li>
                <li className="on"><a href="#qna">Q&A</a></li>
                <li><a href="#delivery">RETURN & DELIVERY</a></li>
                </ul>
            </div> */}
            {/* end nav */}
                <div className='button_box'>
                    <button type="button" 
                    className="qna_button"
                    onClick={handleWrite}>문의 등록</button>
                </div>
                {/* end  button_box*/}
                <div className="qna_write"> {/*start qna_write */}
                    <table className='qna_write_table'>
                        <tbody className="qna_write_body">
                        <tr className="qna_write_line">
                            <td className='qna_write_title'><label>제목</label></td>
                            <td className='qna_write_input'>
                                <textarea name="qna_write_tz" 
                                placeholder='제목을 입력해주세요'/>
                            </td>
                        </tr>
                        <tr>
                            <td className='qna_write_title'><label>내용</label></td>
                            <td className='qna_write_input'>
                                <textarea name="qna_write_main" 
                                            rows={6}
                                            placeholder='내용을 입력해주세요'/>
                                </td>
                        </tr>
                        <tr className='qna_wtite'>
                            <td className='qna_write_title'><label>공개여부</label></td> 
                            <td>
                                <span>
                                <input type="checkbox" />
                                <label>비공개</label>
                                </span> 
                                <ul>
                                    <li>· 작성하신 문의는 마이페이지 <FiChevronRight /> 상품 Q&A에서 확인하실 수 있습니다.</li>
                                    <li>· 교환, 반품, 취소는 1:1문의를 통해 접수 부탁드립니다.</li>
                                    <li>· 개인정보 보호를 위해 계좌번호, 이메일, 주소, 휴대폰 번호 등의 개인정보 입력은 지양하여 주시기 바랍니다.</li>
                                    <li>· 비공개 여부에 체크하지 않을 경우 작성하신 Q&A가 타인에게 노출됩니다.</li>
                                    <li>· 부적절한 게시물 등록 시 비 노출 또는 무통보 삭제될 수 있습니다.</li>
                                    <li>· 개인정보를 포함한 직거래 유도 내용</li>
                                    <li>· 비방/욕설/명예훼손에 해당되는 게시물</li>
                                    <li>· W컨셉과 관계없는 타사이트와 가격비교 및 구매 문의</li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                        <button type='radio'></button>
                        <span>개인정보 수집 및 이용에 대한 동의(필수)</span>
                        <button type='button'>내용보기</button>
                    </div> {/*end qna_table_sub */}
                    <div className='qna_bottom_box'> {/*start _bottom_box*/}
                        <button type='reset'>취소하기</button>
                        <button type='button'>작성하기</button>
                    </div> {/*start _bottom_box*/}
                </div> {/* end cont */}
                <div> {/*start qna_table*/}
                    <table className="qna_table">
                        <tbody className="qna_body">
                            {qnaList && qnaList.map((qna)=>
                                <>
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
                                <div className='qna_content_sub'>
                                    <strong>{qna.sub_title}</strong>
                                    <p>{qna.sub_desc}</p>
                                </div>
                                </>
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
                </div> {/*start qna_table*/}
        </>
    );
}

