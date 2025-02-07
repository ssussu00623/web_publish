import React, { useRef, useState } from 'react';
import ImageUplode from '../components/ImageUplode.jsx'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function NewProduct() {
    //자식이 가진 걸 가져오기 위해선.. 이벤트 함수와 프롭스를 선언해야함
    const [fname, setFnames] = useState({});
    const [preview, setPreview] = useState('');
    let [formData, setFormData] = useState({}); // 입력 할 때마다 바뀌니깐 
    const ProductNameRef = useRef(null); 
    const navigate = useNavigate();

    const getFileName = (fileNames) => {
        // console.log('fileNames===>', fileNames);
        setFnames(fileNames);
        setPreview(`http://localhost:9000/${fileNames.uploadFileName}`)
    }

    //폼 입력시 값을 formData로 추가하는 이벤트 처리 
    // 빅이슈 각각 컴포넌트에 hadlechange주라는 거였다.
    const handleChange = (e)=>{
        const {name, value} = e.target;
        // console.log(name, value);
        setFormData({...formData, [name]:value});
    }

    // 등록 이벤트 처리
    const hadleSubmit = (e) =>{
        e.preventDefault();
        // alert('등록');
        
        if(ProductNameRef.current.value === ''){
            alert('상품명을 입력해주세요 ')
            ProductNameRef.current.focus();
            return false;
        } else {
            //if체크 후 서버연동
            formData = ({...formData, 
                            "uploadFile":fname.uploadFileName, 
                            "sourceFile":fname.sourceFileName});
            // console.log('formData===>',formData);

            axios
                .post('http://localhost:9000/product/new', formData)
                .then(res=> {
                    if(res.data.result_rows === 1){
                        alert("상품이 등록되었습니다.");
                        navigate('/all');
                    } else {
                        alert("상품 등록 실패!!!")
                    }
                })
                .catch(error=> {
                    alert("상품 등록 실패!!! 서버오류")
                    console.log(error)})
        }
    }

    return (
        <div className='content'>
            <h1>New Product</h1>
            <form onSubmit={hadleSubmit}>
                <ul>
                    <li>
                        <label>상품명</label>
                        <input 
                            type="text" 
                            name='productName' 
                            ref={ProductNameRef}
                            onChange={handleChange}/>
                            {/* input이라 콜백함수로 주지 않아도 되고 자체적으로 넘어간다. */}
                    </li>
                    <li>
                        <label>가격</label>
                        <input 
                            type="number" 
                            name='price'
                            onChange={handleChange}/>
                    </li>
                    <li>
                        <label>상품정보</label>
                        <input 
                            type="text" 
                            name='description'
                            onChange={handleChange}/>
                    </li>
                    <li>
                        <label>파일업로드</label>
                        <ImageUplode getFileName = {getFileName}/>
                        {preview && 
                            <img 
                                src={preview} 
                                alt="preview image"
                                style={{width:'100px', height:"100px"}} />}
                    </li>
                    <li> 
                        <input type="hidden" name = 'upload' value={fname.uploadFileName}/>
                        <input type="hidden" name = 'source' value={fname.sourceFileName}/>
                        {/* <input type="text" name = 'upload' value={fname.uploadFileName}/>
                        <input type="text" name = 'source' value={fname.sourceFileName}/> */}
                        {/* 여기는 히든처리하고 우리가 입력하는 게 아니기 때문에 onChange 줄 일 없음  */}
                    </li>
                    <li>
                        <button type='submit'>등록</button>
                        <button type='reset'>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

