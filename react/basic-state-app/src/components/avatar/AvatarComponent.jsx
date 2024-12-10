
export default function AvatarComponent(props){
    return(
        <div className="avatarContanier">
            <div className="avatarImg">
        <img className="img" src={props.img}
        alt={props.alt}
        /></div>
        {props.new&&<span className="isNew">New</span>}
        <p className="name">{props.name}</p>
    </div>
    )
}