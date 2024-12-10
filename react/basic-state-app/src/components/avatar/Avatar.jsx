import { useEffect, useState } from "react"
import "./Avatar.css"
import AvatarComponent from "./AvatarComponent"

export default function Avatar(){
    const [list, setList]=useState([])

    useEffect(()=>{
        fetch("./data/avatar.json")
        .then(data => data.json())
        .then(jsonData=> setList(jsonData))
        .catch(error=> console.log(error))
    })
    return(
        <ul>
            {list&&list.map((item)=> 
            <li>
                <AvatarComponent 
                    img ={item.img}
                    alt ={item.alt}
                    name = {item.name}
                    new = {item.new}
                />
            </li>
            )}
        </ul>
    )
}