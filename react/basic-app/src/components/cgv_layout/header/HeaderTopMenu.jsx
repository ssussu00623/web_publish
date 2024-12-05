export default function HeaderTopMenu({href, src, name}){
    return(
        <li>
            <a href={href} 
            target="_parent"
            className="header-menu-icon">
            <img src={src} 
            alt="" />
            <span>&nbsp;{name}</span></a>
        </li>
    )
}