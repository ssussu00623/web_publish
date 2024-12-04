// import './Dwitter.css';
/**
 * Dwitter은 AppDwitter에 호출되는 자식격.
 * 부모 쪽에서 같은 CSS파일을 사용중이라면부모 쪽에만 호출되어도
 * 자식에게 똑같이 적용된다.
 * 브라우저 엘리먼트창에서 보면 같은 곳에 묶여있는 걸 알 수 있음 
 */

// Dwitter.jsx 실제 출력되는 내용 - 화면

// export default function Dwitter(props){
//     //가지수가 많아지면 직접 구조분해할당으로 받는 건 비추. 
//     // key를 props로주고 불러온다. Dwitter을 호출하는 AppDwitter에서정보 입력
//     return(
//         <div className="dwitter">
//             <div className="dwitter-image">
//                 <img src={props.img} alt="dwitter-image" />
//             </div>
//             <div className="title">
//                 <span>{props.name}</span>
//                 <span>{props.id}</span>
//                 <span>{props.date}</span>
//             </div>
//             <div className="content">{props.content}</div>
//         </div>
//     );
// }
export default function Dwitter({img, name, id, date, content}){
    // 구조분해 할당의 경우....
    return(
        <div className="dwitter">
            <div className="dwitter-image">
                <img src={img} alt="dwitter-image" />
            </div>
            <div className="title">
                <span>{name}</span>
                <span>{id}</span>
                <span>{date}</span>
            </div>
            <div className="content">{content}</div>
        </div>
    );
}