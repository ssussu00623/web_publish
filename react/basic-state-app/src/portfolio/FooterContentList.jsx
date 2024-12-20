import React, { useEffect, useState } from 'react';
import FooterContent from './FooterContent';


export default function FooterContentList() {
    const [footerDater, setFooterDater] = useState([])
    const [footerDaterList, setFooterDaterList] = useState([])
        useEffect(()=> {
            fetch("/data/portfolio.json")
                .then(data => data.json())
                .then(jsonData => setFooterDater(jsonData.footerDater),
                setFooterDaterList(jsonData.footerDaterList))
                .catch(error=> console.log(error))
        }, [])
    return (
        <div>
            <footer id="contact" className="section">
            <h2 className="title">{footerDater.ment}</h2>
            <p className="description">{footerDater.mail}</p>
            <ul className="contact__links">
                {footerDaterList&&footerDaterList.map(item=>
                <li>
                    <FooterContent 
                        href={item.link}
                    />
                </li>
                )}
            </ul>
                <p>{footerDater.all}</p>
            </footer>
        </div>
    );
}

