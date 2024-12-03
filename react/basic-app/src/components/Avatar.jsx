import '../css/Avatar.css';
import AvatarImage from './AvatarImage.jsx';

export default function AvatarList({img, name}){
    return(
        //jsx문법
    <div className="avatar-container">
        <AvatarImage img={img} />
        <p>{name}</p>
    </div>
    )
}
