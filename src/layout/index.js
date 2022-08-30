import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Layout() {
    const darkMode = useSelector((state) => state.theme.darkMode);

    useEffect(() => {
        darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');

        return () => document.body.classList.remove('dark')
    }, [darkMode])

    return (
        <div>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </div>
    )
}