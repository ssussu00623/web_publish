
import AvatarImage from './AvatarImage.jsx'

export default function AvatarImageList({list}){
    return(
        <ul>
            {list.map((item)=> <li><AvatarImage img={item.img} /></li>)}
        </ul>
    );
}

// item = {"img":"/images/people1.webp"} 이런 형식! 