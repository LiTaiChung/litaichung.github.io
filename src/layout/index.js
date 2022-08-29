import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Layout() {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </div>
    )
}