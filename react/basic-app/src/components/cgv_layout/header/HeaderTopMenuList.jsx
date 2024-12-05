import HeaderTopMenu from "./HeaderTopMenu";

export default function HeaderTopMenuList(){
    const list = [
        {
            "href" : "#",
            "src" : "https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" ,
            "name" : "로그인"
        },
        {
            "href" : "#",
            "src" : "https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png"  ,
            "name" : "회원가입"
        },
        {
            "href" : "#",
            "src" : "https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" ,
            "name" : "MY CGV"
        },
        {
            "href" : "#",
            "src" : "https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png" ,
            "name" : "고객센터"
        }
    ];
    return(
        <nav>
            <ul>
                {list.map((menu)=> (
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