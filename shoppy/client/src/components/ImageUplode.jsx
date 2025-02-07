import Form from 'react-bootstrap/Form'
import axios from 'axios';
import React, { useState } from 'react';

export default function ImageUplode({getFileName}) {
    const [oldFile, setOldFile] = useState("");
    const formData = new FormData();

    const hadleFileUpload = (e) => {
        formData.append("file", e.target.files[0]) // 새로운 파일 
        formData.append("oldFile", oldFile); // 이전파일 (오리지널 네임)
        //서버전송

        axios
            .post('http://localhost:9000/uploads', formData, {
                headers : {"Content-Type":"multipart/form-data"}, //파일과 문자 데이터 추가시. 파일만 넘어갈 때는 생략 가능.  
            })
            .then(res=> {
                getFileName(res.data);
                setOldFile(res.data.oldFile);
            })
            .catch(error=> console.log(error))
        /* 기본틀
        axios
            .post('경로', formData)
            .then(res=> console.log('res===>', res.data))
            .catch(error=> console.log(error))
        */
    }
    // console.log('oldFile====>', oldFile);
    
    return (
        <div>
            <Form.Control
                type='file'
                onChange={(e)=>{hadleFileUpload(e)}}
                >
                
            </Form.Control>
        </div>
    );
}

