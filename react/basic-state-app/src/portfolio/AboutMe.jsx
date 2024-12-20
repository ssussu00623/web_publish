import React, { useEffect, useState } from 'react';
import AboutMeBox from './AboutMeBox';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faMobile, faServer} from '@fortawesome/free-solid-svg-icons'


export default function AboutMe( ) {
    const [boxList, SetBoxList] = useState([]);
    useEffect(()=> {
        fetch("/data/portfolio.json")
            .then(data=> data.json())
            .then(jsonData=>SetBoxList(jsonData.boxList))
    },[])
    return (
        <section id="about" className="section max-container">
        <h2 className="title">About me</h2>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure natus, temporibus perspiciatis repudiandae nostrum modi
            doloremque expedita non eius ipsum! Beatae porro adipisci 
            omnis architecto dignissimos. Iusto ipsa inventore adipisci.</p>
        <div>
            <ul className="majors">
                {boxList&&boxList.map((item)=>
                <li className="major">
                    <AboutMeBox
                        icon={item.icon}
                        title={item.title}
                        skill={item.skill} />
                </li>
                )}
            </ul>
        </div>
        <ul className="jobs">
            <li className="job">
            <img src="images/jobs/google.png" alt="google" />
            <div>
                <p className="job__name">Google as Junior Software Engineer</p>
                <p className="job__period">2019 Oct - Until now</p>
            </div>
            </li>
            <li className="job">
            <img src="images/jobs/samsung.png" alt="samsung" />
            <div>
                <p className="job__name">Samsung as Junior Software Engineer</p>
                <p className="job__period">2010 Oct - 2019 Oct</p>
            </div>
            </li>
        </ul>
        </section>
    );
}

