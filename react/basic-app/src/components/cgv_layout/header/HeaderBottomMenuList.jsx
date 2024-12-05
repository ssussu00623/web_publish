import HeaderBottomMenu from './HeaderBottomMenu.jsx';

export default function HeaderBottomMenuList(){
    const names = [
        {"name": "영화"},
        {"name": "극장"},
        {"name": "예매"},
        {"name": "스토어"},
        {"name": "이벤트"},
        {"name": "헤택"}
    ];
    return(
        <ul className="flex-container">
                {names.map(item => 
            <li>
                <HeaderBottomMenu name={item.name} />
                {/* 그냥 name으로 넘기면 위 names의 객체 값이 넘어감!!! 정보값인 item이 넘어가는 것을 유의. */}
            </li>
                )} {/*반복할 정보 앞에서 나와야함 여긴 li가 반복*/}
        </ul>
        );
    }