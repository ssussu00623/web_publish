import Form from 'react-bootstrap/Form'
import axios from 'axios';
import React from 'react';

export default function ImageUplode({getFileName}) {
    const formData = new FormData();

    const hadleFileUpload = (e) => {
        formData.append("file", e.target.files[0])
        //서버전송

        axios
            .post('http://localhost:9000/uploads', formData)
            .then(res=> {
                console.log('res===>', res.data);
                getFileName(res.data);
            })
            .catch(error=> console.log(error))
        /* 기본틀
        axios
            .post('경로', formData)
            .then(res=> console.log('res===>', res.data))
            .catch(error=> console.log(error))
        */
    }
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

