import React from 'react';
import MySkillList from './MySkillList';

export default function MySkills() {
    return (
        <section id="skill" className="section max-container">
        <h2 className="title">My Skills</h2>
        <p className="description">Skills & Attributes</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
            eveniet cupiditate optio natus? Cum, harum eum sint id quod 
            nulla adipisci. Sunt?</p>
        <div className="skills">
            <article className="skills__coding">
            <h3 className="skill__title">Coding Skills</h3>
                <MySkillList />
            </article>
            <article className="skills__tools">
            <h3 className="skill__title">Tools</h3>
            <ul className='bar'>
                <li>Visual Studio Code</li>
                <li>IntelliJ</li>
                <li>Android Studio Code</li>
                <li>iOS development tools</li>
                <li>Eclipse</li>
            </ul>
            </article>
            <article className="skills__etc">
            <h3 className="skill__title">Etc</h3>
            <ul className='bar'>
                <li>Git</li>
                <li>Scrum Master</li>
                <li>SVN</li>
            </ul>
            </article>
        </div> 
        </section>
    );
}

