// props = {img: "/images/people1.webp"} <- 이렇게 키 값을 가져옴
// props.img

//기본형태
// export default function AvatarImage(props){
//     return (
//         <img src={props.img} className="avatar-img"></img>
//     );
// }

//구조분해 할당
// props = {img: "/images/people1.webp"} 이렇게 객체 형태로 들어오기 때문에..
//구조분해 할당이 가능하다. 
import '../css/Avatar.css';

export default function AvatarImage({img}) {
    return (
        <img src={img} className="avatar-img"></img>
    );
}