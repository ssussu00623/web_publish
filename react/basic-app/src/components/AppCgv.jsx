import Cgv from "./Cgv.jsx";
import CgvList from "./CgvList.jsx";

export default function AppCgv(){
    const nameList =[
        {"name": "Login", "herf": "#login"},
        {"name": "Join", "herf": "#join"},
        {"name": "MyCgv", "herf": "#mycgv"},
        {"name": "Support", "herf": "#support"},
    ]
    return(
            <>
                <div>
                    <Cgv name ="Login" href="#login" />
                    <Cgv name ="Join" href="#join" />
                    <Cgv name ="MyCgv" href="#mycgv" />
                    <Cgv name ="Support" href="#support" />
                </div>
        <div><CgvList list= {nameList} />
        </div> 
    </>
    )
}