import React from "react";
import routes from './routes';
import { BrowserRouter, useRoutes, HashRouter } from "react-router-dom";

const GetRoutes = () => {
    return useRoutes(routes);
}

const SetRoutes = () => {
    return (
        <HashRouter>
        {/* <BrowserRouter> */}
            <GetRoutes />
        {/* </BrowserRouter> */}
        </HashRouter>
    );
}

export default SetRoutes;