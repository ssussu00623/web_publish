import React, { useEffect, useState } from 'react';
import Book from '../aladin/Book';

export default function BookList2() {
    const[books, setBooks] = useState([])
    const [type, setType] = useState('total')

    useEffect(()=>{
        fetch("/data/aladin.json")
        .then(data=> data.json())
        .then(jsonData=> 
        {
            if(type === 'total'){
                setBooks(jsonData.books);
            } else {
                const filterBooks = jsonData.books.filter((book)=> book.type === type);
                setBooks(filterBooks)
            }
        })
        .catch(error=> console.log(error))
    }, [type]);
    const handleTypeClick=(event)=>{
        setType(event.target.value);
    
    } 

    return (
        <>
            <div>
                <input type="radio" name='type' value='total' onClick={handleTypeClick}/>전체
                <input type="radio" name='type' value='domestic' onClick={handleTypeClick}/>국내
                <input type="radio" name='type' value='overseas' onClick={handleTypeClick}/>해외
                <input type="radio" name='type' value='ebook' onClick={handleTypeClick}/>전자도서
            </div>
            <div>
                <ul style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr'}}>
                    {books && books.map(book=>
                    <li style={{listStyle:'none'}}>
                        <Book 
                        img={book.img}
                        title={book.title}
                        />
                    </li>
                    )}
                </ul>
            </div>
        </>
    );
}

