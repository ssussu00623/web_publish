import './Menu.css'

export default function Menu({name, href, bg, color, click, category}){
    // Menu 여기서 카테고리 값을 외부에서 받아서 컴포넌트 별로 생성하고 보내는 것 
    const handleClickMenu=()=>{
        click(category);
    }
    return(
        <a href={href} 
        className="menu-item"
        style={{backgroundColor: bg, color: color}}
        onClick={handleClickMenu}
        >{name}</a>
    );
}