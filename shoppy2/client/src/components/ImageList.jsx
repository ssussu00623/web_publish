import React from 'react';
import { FaPlus } from "react-icons/fa6";

export default function ImageList({imgList, className}) {

    // console.log('name==>> ', className.substring(0,6));
    const name = className.substring(0,6); // 클래스네임 인덱스 0에서 6까지... 
    
    return (
        <ul className={className}>
            {   name !== 'review' ?
                    imgList && imgList.map( image => <li><img src={image} alt="" /></li>) //className이 리뷰가 아니라면! 
                    :  imgList && imgList.map((image, i) => //리뷰면 ~ 여기가 실행됨 
                            <li className="review-top-img-metadata">
                                <img src={image} alt="" />
                                { i === 6 && 
                                    <>
                                        <p className="review-top-imglist-metadata"></p>
                                        <p className="review-top-imglist-metadata2"><span><FaPlus /></span> <span>더보기</span> </p>
                                    </>    }                                
                            </li>)
            }
        </ul>
    );
}
