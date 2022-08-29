import React, { useState } from "react";

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

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading, menuToggle, setMenuToggle }}>
            {children}
        </GlobalContext.Provider>
    );
};