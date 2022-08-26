import React, { useState } from "react";

const initialState = {
    isLoading: false,
    setIsLoading: state => {},
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState(initialState.isLoading);

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </GlobalContext.Provider>
    );
};