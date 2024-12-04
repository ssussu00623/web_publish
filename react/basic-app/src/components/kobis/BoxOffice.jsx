import './BoxOffice.css';

// export default function BoxOffice(props){//props 버전
//     return(
//         <tr>
//             <td>{props.rank}</td>
//             <td>{props.title}</td>
//             <td>{props.openDt}</td>
//             <td>{props.cnt}</td>
//             <td>{props.total}</td>
//             <td>{props.amt}</td>
//         </tr>
//     );
// }
// export default function BoxOffice({rank, title, openDt, cnt, total, amt}){ //구조분해 할당 버전
//     return(
//         <tr>
//             <td>{rank}</td>
//             <td>{title}</td>
//             <td>{openDt}</td>
//             <td>{cnt}</td>
//             <td>{total}</td>
//             <td>{amt}</td>
//         </tr>
//     );}

export default function BoxOffice({rank, title, openDt, cnt, total, amt, type}){ //구조분해 할당 버전
    // 여러 값을 부여하려면 구분자가 필요하다. 여기에선 type으로 진행했음. 이걸 잘 기억해두고 활용하는 것이 중요. **** 외우기
    // type이 따로없어서 할 수 있던 것... 있다면 다른 걸 활용해보쟝 
    if(type === "content"){
        cnt = parseInt(cnt).toLocaleString().concat('명');
        total = parseInt(total).toLocaleString().concat('명');
        amt = parseInt(amt).toLocaleString().concat('원');
    }
    return(
        <div>
            <p style={{width: 50}}>{rank}</p>
            <p style={{width: 220}}>{title}</p>
            <p style={{width: 100}}>{openDt}</p>
            <p style={{width: 100}}>{cnt}</p>
            <p style={{width: 100}}>{total}</p>
            <p style={{width: 150}}>{amt}</p>
        </div>
    );}
