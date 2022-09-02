import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Layout() {
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