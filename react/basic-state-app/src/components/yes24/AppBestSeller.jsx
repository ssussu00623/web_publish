import './BestBook.css'
import './Menu.css'
import BestBook from "./BestBook.jsx";
import MenuList from './MenuList.jsx';
import { useEffect, useState } from 'react';


export default function AppBestSeller(){
    const [menuList, setMenuList] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [category, setCategory] = useState('');
    useEffect(()=>{
        fetch("/data/yes24.json")
        .then(data=> data.json())
        .then(jsonData => {
            setMenuList(jsonData.menuList);
            if(category==='total'){
                setBookList(jsonData.bookList);
            } else {
                //category 값에 따라 필터링 처리 후 setBookList에 저장
                const filterBooks =
                    jsonData.bookList.filter((book)=> book.category === category);//[]
                setBookList(filterBooks)
            }
        })
        .catch(error=> console.log(error))
    }, [category]) // 카테고리가 들어가면, 카테고리 값이 바뀔 때마다 재호출 된다는 것. !!디펜던시!!는 useState로 묶어 관리한다.

    //App<--- MenuList <--- Menu 이렇게 타고타고와서 여기까지 옴 
    const handleMenuClickReq2 =(category)=> {
        // console.log(`AppBestSeller==> ${category}`);
        setCategory(category);
    }
    // console.log(`category===> ${category}`);

    return(
        <div className="container">
            <MenuList 
            list = {menuList}
            click = {handleMenuClickReq2}
            />
            <BestBook list = {bookList}/>
        </div>
    );
}
// 




