import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import AppAladin from '../components/aladin/AppAladin.jsx';
import AppAirbnb from '../components/airbnb/AppAirbnb.jsx';
import AppOlive from '../components/olive/AppOlive.jsx'
import AppBestSeller from '../components/yes24/AppBestSeller.jsx'
import AppCounter from '../components/counter/AppCounter.jsx'
import Avatar from '../components/avatar/Avatar.jsx'


export default function AppRouter2() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="airbnb" element={<AppAirbnb />} />
                        <Route path="aladin" element={<AppAladin />} />
                        <Route path="olive" element={<AppOlive />} />
                        <Route path="yes24" element={<AppBestSeller />} />
                        <Route path="counter" element={<AppCounter />} />
                        <Route path="avatar" element={<Avatar />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home(){
    return (
        <h1>
            home!!!
        </h1>
    )
}