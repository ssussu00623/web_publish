import React from 'react';

export default function QnaContentSub(props) {
    return (
        <>
            <div className='qna_content_sub'>
                <strong>{props.sub_title}</strong>
                <p>{props.sub_desc}</p>
            </div>
        </>
    );
}

