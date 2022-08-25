import React from "react";
import { Outlet } from "react-router-dom";

export default function Public() {
    // console.log("This is Public");

    return (<>
        <Outlet />
    </>);
}
