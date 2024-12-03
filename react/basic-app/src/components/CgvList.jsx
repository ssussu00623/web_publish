import Cgv from "./Cgv.jsx"; 

export default function CgvList({list}){
    return(
        <ul className="map-container">
            {list.map((item)=>
                <li>
                    <Cgv herf={item.herf}
                        name={item.name} /></li>
        )}
        </ul>
    ); 
}