import PackageContent from "./PackageContent.jsx";
import { useState, useEffect } from "react";

export default function Package(){
    const [plist,setPlist] = useState([]);

    useEffect(()=> {
        fetch("/data/cgv_content.json")
        .then(data => data.json())
        .then(jsonData => setPlist(jsonData.plist))
        .catch(error=> console.log(error))
    }, [])
    return(
        <div className="content-event-special">
            <section className="package-content-list">
                {plist.map(Object =>
                    <PackageContent 
                            title={Object.title} 
                            list={Object.list} /> 
                )}
                {/* 같은 내용을 반복하고 있기 때문에 여기서도 배열로 돌리면 된다. */}
            </section>
        </div>
    );
}