import React, { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const initialState = {
    isLoading: false,
    setIsLoading: state => {},
    menuToggle: false,
    setMenuToggle: state => {},
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState(initialState.isLoading);
    const [ menuToggle, setMenuToggle ] = useState(initialState.menuToggle);

    useEffect(() => {
        menuToggle ? disablePageScroll() : enablePageScroll();
    }, [menuToggle])

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading, menuToggle, setMenuToggle }}>
            {children}
        </GlobalContext.Provider>
    );
};