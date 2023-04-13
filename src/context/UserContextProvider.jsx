import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider
            value={{user, setUser}}
        >
            {children}
        </UserContext.Provider>
    );
};