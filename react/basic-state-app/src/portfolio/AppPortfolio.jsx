import React, { useEffect, useState } from 'react';
import './style.css'
import Header from './Header';
import AboutMe from './AboutMe';
import Home from './Home';
import MySkills from './MySkills';
import MyWorks from './MyWorks';
import Testimonial from './Testimonial';
import Footer from './Footer';
import ArrowUp from './ArrowUp';

export default function Appportfolio() {

    return (
        <div>
            <Header />
            <Home />
                <AboutMe />
                <MySkills />
                <MyWorks />
                <ArrowUp />
                <Testimonial />
            <Footer />
        </div>
    );
}

