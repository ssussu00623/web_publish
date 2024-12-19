import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Layout from './Layout';
import Support from './Support';
import Signupnon from '../form/Signupnon';
import CgvLoginForm from '../form/CgvLoginForm';
import AppBestSeller from '../yes24/AppBestSeller';

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/signup' element={<Signupnon />} />
                        <Route path='/login' element={<CgvLoginForm />} />
                        <Route path='/support' element={<Support />} />
                        <Route path='/bestbook' element={<AppBestSeller />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

