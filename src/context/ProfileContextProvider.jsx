import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({children}) => {
    const [data,setData] = useState(null);
    return (
        <ProfileContext.Provider
            value={{data, setData}}
        >
            {children}
        </ProfileContext.Provider>
    );
};