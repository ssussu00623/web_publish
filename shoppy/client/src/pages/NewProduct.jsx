import React, { useState } from 'react';
import ImageUplode from '../components/ImageUplode.jsx'

export default function NewProduct() {
    //자식이 가진 걸 가져오기 위해선.. 이벤트 함수와 프롭스를 선언해야함
    const [fname, setFnames] = useState({});
    const getFileName = (fileNames) => {
        console.log('fileNames===>', fileNames);
        setFnames(fileNames);
    }
    return (
        <div className='content'>
            <h1>New Product</h1>
            <form>
                <ul>
                    <li>
                        <label>상품명</label>
                        <input type="text" name='productName'/>
                    </li>
                    <li>
                        <label>가격</label>
                        <input type="number" name='price'/>
                    </li>
                    <li>
                        <label>상품정보</label>
                        <input type="text" name='description'/>
                    </li>
                    <li>
                        <label>파일업로드</label>
                        <ImageUplode getFileName = {getFileName}/>
                    </li>
                    <li>
                        <input type="text" name = 'upload' value={fname.uploadFileName}/>
                        <input type="text" name = 'source' value={fname.sourceFileName}/>
                    </li>
                    <li>
                        <button>등록</button>
                        <button>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

