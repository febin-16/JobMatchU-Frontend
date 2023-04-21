import React, { useState, createContext } from "react";

export const JobContext = createContext();

export const JobContextProvider = ({children}) => {
    const [job, setJob] = useState(false);
    return (
        <JobContext.Provider
            value={{job, setJob}}
        >
            {children}
        </JobContext.Provider>
    );
};