import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Private() {
    console.log('This is Private')

    return (<>
        <Outlet />
    </>)
}
