import axios from 'axios';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

export default function ImageUploadMultiple({getFileName}) {
    const[oldFile, setOldFile] = useState([]);
    const handleFileUploadMultiple = (e)=>{
        const formData = new FormData();
        const files = e.target.files;
        console.log(files.length);
        
        // console.log('files====>', files);
        // if(files.length < 6){
        //formData에 append - file 개별로 append되어야 함 배열이라 한 번에 넘길 수 없은...
        //for of 버전
        for (const file of files) formData.append("files", file);
        // ....
        // for (let i=0; i<files.length; i++) formData.append("files", files[i]);
        //for each버전
        // files.forEach((file)=> formData.append("files", file)); //가능했으나 iteralbe 호출로 인해 사용 불가 
        formData.append("oldFile", oldFile);
        for (const [key, value] of formData) console.log(key, value);
        

        //서버전송
        /* 업로드 파일 갯수 제한
        axios
            .post("http://localhost:9000/uploads/multiple", formData)
            .then(res => console.log(res.data))
            .catch(error => console.log(error));
        } else {
            // alert('파일 업로드는 최대 5개까지 가능합니다.')
        }
            */
        // 파일 업로드 제한 없이 사용자가 선택한 갯수만큼 전송 ?maxFiles=${files.length}
        axios
            .post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData,
                {headers : {"Content-Type":"multipart/form-data"},
            }) //url에 공백없이 꼬옥 ${}부분 확인
            .then(res => {
                getFileName(res.data); //NewProduct컴포넌트로 전송
                setOldFile(res.data.oldFile);
            })
            .catch(error => console.log(error));
        // } else {
        //     // alert('파일 업로드는 최대 5개까지 가능합니다.')
        // }
    }
    return (
        <div>
            <Form.Control 
                    type='file'
                    onChange={(e)=>{handleFileUploadMultiple(e)}}
                    multiple /> 
        </div>
        /**기본틀 
         * <div>
            <Form.Control 6
                    type='file'
                    onChange='handleFileUploadMultiple'
                    multiple /> 
            </div>
         */
    );
}


