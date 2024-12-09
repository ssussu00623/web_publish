
export default function Aribnbcomponent(props){
    return(
        <div className="contanier">
            <div className="image">
                <img src={props.img} alt="" />
                <span className="isgood">게스트 선호</span>
            </div>
            <div className="data">
                <p className="d1">{props.d1}</p>
                <p className="d2">{props.d2}</p>
                <p className="d3">{props.d3}</p>
                <p className="d4">{props.d4}</p>
            </div>
        </div>
    )
}