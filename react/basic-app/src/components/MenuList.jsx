import Menu from "./Menu.jsx";
import '../css/Menu.css'

export default function MenuList({list}){// 객체로 받기 때문에 분해할 필요 없음! 
    return(
        <ul className="menu-container">
            {list.map((item)=> 
                    <li> 
                        <Menu name={item.name} 
                                href={item.href}
                                bg={item.bg}
                                color={item.color} /></li>)}
        </ul> //<li style={{backgroundColor: item.bg}}> 이렇게안해도된다...
    );
}