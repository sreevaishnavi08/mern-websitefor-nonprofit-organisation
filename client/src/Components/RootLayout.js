import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function RootLayout() {

    return (
        <div style={{minHeight: '100vh' }}>
                <div>
                    <Navbar />
                    <div style={{ minHeight: '80vh' }}>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
        </div>
    );
}

export default RootLayout;
