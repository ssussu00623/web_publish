import React, { useEffect, useState } from 'react';
import Book from './Book';

export default function BookList() {
    const [books, setBooks] = useState([])
    const [category, setCategory] = useState([])
    const [type, setType] = useState('total')
    const [selectCategory, setSelectCategory] = useState('')
    
    useEffect(() =>{    
        console.log(`setSelectCategory--->${selectCategory}`);
            
        fetch("/data/aladin.json")
        .then(data => data.json())
        .then(jsonData => {
            setCategory(jsonData.category);

            {/*
                jsonData.filter((book=> 
                if(book.type === "domestic"){
                    return book;
                }else...) 로 조건이 여러개라면 if로 여러개~ 
                */}
            if(type === 'total'){
                setBooks(jsonData.books)
            }
            else {
                const filterBooks = jsonData.books.filter((book)=>book.type === type);
                setBooks(filterBooks)
            {/* 
            단일 조건이라면 하나로블레이스 없이! 
            setBooks(jsonData.filter((book)=>book.type === "domestic")) 
            이렇게도 가능하지면 겹치는 작업이 많기 때문에 추천하지 않음. 
             */}
            }
        })
        .catch(error=> console.log(error))
    }, [type, selectCategory]);
    
    const handleClick=(event)=>{
        setType(event.target.value)
    }
    const handleChangeCategory=(event)=>{
        setSelectCategory(event.target.value);
        
    }
    return (
        <>
        <div>
            <input type="radio" name='type' value="total" onClick={handleClick}/> 전체
            <input type="radio" name='type' value="domestic" onClick={handleClick}/> 국내도서
            <input type="radio" name='type' value="overseas" onClick={handleClick}/>해외도서
            <input type="radio" name='type' value="ebook" onClick={handleClick}/> 전자도서
            <select onChange={handleChangeCategory}>
                <option value='선택'>선택</option> 
                {/* 맨 처음 1번만 뜨면 되니 굳이 DB로 넘기지 않아도 됨 */}
                {category && category.map((item)=>
                <option value={item.name}>{item.name}</option>
                )}
            </select>
        </div>
            <ul style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr'}}>
                    {books && books.map(book=>  //인터넷 등 오류로 출력되지 않을 때를 대비해 꼭 트루일 때만 출력하는 &&를 활용하기~
                <li style={{listStyle:'none'}}>
                        <Book 
                            img = {book.img}
                            title = {book.title}/>
                </li>
                )}
            </ul>
        </>
    );
}

