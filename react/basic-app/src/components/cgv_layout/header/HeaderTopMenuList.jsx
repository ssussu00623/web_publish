import HeaderTopMenu from "./HeaderTopMenu";
import { useState, useEffect } from "react";

export default function HeaderTopMenuList(){
    const [list, SetList] = useState([]);

    useEffect(()=>{
        fetch("/data/cgv_header.json")
        .then(data=> data.json())
        .then(jsonData=>SetList(jsonData.topMenuList))
        .catch(error => console.log(error))
    }, [])

    return(
        <nav>
            <ul>
                {list && list.map((menu)=> (
                <li>
                    <HeaderTopMenu 
                        href={menu.href}
                        src={menu.src}
                        name={menu.name} />
                </li>
                ))}
            </ul>
        </nav>
    );
}