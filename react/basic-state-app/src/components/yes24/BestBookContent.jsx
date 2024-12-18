import React from 'react';

export default function BestBookContent(props) {
    return (
        <div className='container-content'>
            <div className='container-content-tags'>
                {props.suggest && <span className='suggest'>강력추천</span>}
                {props.today && <span className='today'>오늘의 책</span>}
                {props.nobel && <span className='nobel'>2024 노벨문학상 수상작가</span>}
                </div>
            <div>
                <span>[{props.type}]</span>
                <span>{props.title}</span>
            </div>
            <div>
                <span>{props.autor} 저|</span>
                <span>{props.company} |</span>
                <span>{props.pubDate}</span>
            </div>
            <div>
                <span>{props.price}</span>
                <span>({props.perSale}% 할인)</span>
                <span>[p]{props.point}원</span>
            </div>
        </div>
    );
}
