import React from 'react';
import Major from './Major';

export default function Majors() {
    const majorlist = [
        {"icon":"html", "title":"Front-end", "subjects":"HTML, CSS, JavaScript, TypeScript, React, WebAPIs"},
        {"icon":"mobile", "title":"Mobile", "subjects":"Android Studio, React Native, iOS, Swift, Java, Kotlin"},
        {"icon":"server", "title":"Back-end", "subjects":"Java, JavaScript, Go, Kotlin, Spring, Spring Boot"}
    ]
    return (
        <ul className='majors'>
                {majorlist && majorlist.map((item)=>
            <li className='major'>
                <Major 
                icon={item.icon}
                title={item.title}
                subjects={item.subjects}
                />
            </li>
            )}
        </ul>
    );
}

