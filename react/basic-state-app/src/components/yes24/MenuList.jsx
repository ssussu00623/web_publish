import Menu from "./Menu.jsx";
import './Menu.css'

export default function MenuList({list, click}){// 구조분해할당이니 이름이 똑!!!같아야함!!!
    // MenuList <--- Menu 이렇게 타고타고와서 여기까지 옴 
    const handleMenuClickReq =(category)=> {
        click(category);
    }
    return(
        <ul className="menu-container">
            {list && list.map((item)=> 
                    <li> 
                        <Menu name={item.name} 
                                href={item.href}
                                bg={item.bg}
                                color={item.color} 
                                category={item.category}
                                click={handleMenuClickReq}
                                /></li>)}
        </ul> 
    );
}