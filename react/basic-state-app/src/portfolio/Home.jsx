import React from 'react';

export default function Home() {
    return (
        <section id="home">
            <img className="home__avatar" src="http://127.0.0.1:5500/portfolio2/images/favicon.ico" alt="portfolio" />
            <h2 className="home__title">Hello <br /> I'm 
            <strong className="home__title--strong">Dream Coder</strong>, SSUSSU</h2>
            <p className="home__description">A software engineer currently residing in Seoul, South Korea</p>
            <a className = "home__contact" href="#contact">Contact Me</a>
        </section>
    );
}

