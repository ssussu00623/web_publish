import React, { useEffect, useState } from 'react';
import MyWorksContent from './MyWorksContent';

export default function MyWorksContentList() {
    const [workList, setWorkList] = useState([])
    useEffect(()=> {
        fetch("/data/portfolio.json")
        .then(data=> data.json())
        .then(jsonData=> setWorkList(jsonData.worklist))
    }, [])
    return (
        <ul className="projects">
            {workList&&workList.map((item)=>
                <li className='project'>
                    <MyWorksContent 
                        className={item.className}
                        img={item.img}
                        alt={item.alt}
                        divClassName={item.divClassName}
                        h3ClassName={item.h3ClassName}
                        name={item.name}
                        etc={item.etc}
                    />
                </li>
            )}
        </ul>
    );
}

