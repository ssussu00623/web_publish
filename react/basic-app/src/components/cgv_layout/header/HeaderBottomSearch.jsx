export default function HeaderBottomSearch(){
    return(
        <div className="header-bottom-search">
            <input type="search" value="대도시의 사랑법" />
        <button className="header-menu-serch-icon">
            <img className="header-menu-serch-icon-img" src="./images/magnifying-glass.png" alt="search" />
        </button>
    </div>
    );
}