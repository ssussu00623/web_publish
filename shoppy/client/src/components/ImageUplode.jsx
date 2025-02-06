import React from 'react';
import Form from 'react-bootstrap/Form'

export default function ImageUplode() {
    //파일 업로드 이벤트 함수
    const handleFileUpload = (e)=>{
        // 여기의 e와 onchange의 e, 콜백함수의 e. 모두 이름을 같게 만들어줘야함!
        console.log(e.target.files);
    }
    return (
        <div>
            <Form.Control 
                type = "file"
                onChange={(e)=>{handleFileUpload(e)}}
                />
        </div>
    );
}

