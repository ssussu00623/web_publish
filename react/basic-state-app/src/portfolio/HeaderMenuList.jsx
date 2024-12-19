import React, {useEffect, useState} from 'react';
import HeaderMenu from './HeaderMenu';

export default function HeaderMenuList() {
    const [menuList, setMenuList] = useState([]);
    useEffect (()=>{
        fetch("/data/portfolio.json")
        .then(data=> data.json())
        .then(jsonData =>
            setMenuList(jsonData.menuList)
        )
    }, [])
    console.log(menuList);
    return (
        <div>
            <ul className="header__menu">
                        {menuList&&menuList.map((item) => 
                            <li>
                                <HeaderMenu
                                    name={item.name} 
                                    href={item.href}
                                    className={item.className}
                            />
                        </li>) }
            </ul>
        </div>
    );
}