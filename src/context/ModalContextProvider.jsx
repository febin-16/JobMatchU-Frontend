import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <ModalContext.Provider
            value={{showModal, setShowModal}}
        >
            {children}
        </ModalContext.Provider>
    );
};