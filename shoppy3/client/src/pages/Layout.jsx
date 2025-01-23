import React from 'react';
import Header from '../components/Header';
import Home from './Home';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

