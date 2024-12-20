import React, { useEffect, useState } from 'react';
import FooterContent from './FooterContent';


export default function FooterContentList() {
    const [footerDaterList, setFooterDaterList] = useState([])
        useEffect(()=> {
            fetch("/data/portfolio.json")
                .then(data => data.json())
                .then(jsonData => setFooterDaterList(jsonData.footerDaterList))
                .catch(error=> console.log(error))
        }, [])
    return (
        <div>
            <ul className="contact__links">
                {footerDaterList&&footerDaterList.map(item=>
                <li>
                    <FooterContent 
                        href={item.link}
                        img={item.img}
                    />
                </li>
                )}
            </ul>
        </div>
    );
}

