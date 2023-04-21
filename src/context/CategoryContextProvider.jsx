import React, { useState, createContext } from "react";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({children}) => {
    const [category, setCategory] = useState(false);
    return (
        <CategoryContext.Provider
            value={{category, setCategory}}
        >
            {children}
        </CategoryContext.Provider>
    );
};