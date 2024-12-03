import '../css/Button.css'

export default function Button({name, type}){
    return(
        <button className="button-item"
        type={type}>{name}</button>
    )
}