import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import NavBar from '../pages/Shared/NavBar';
import ScrollToTop from '../pages/Shared/ScrollToTop';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <ScrollToTop></ScrollToTop>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;