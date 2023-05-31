import React, { useState, createContext } from "react";

export const ModalDataContext = createContext();

export const ModalDataContextProvider = ({ children }) => {
  const [showDataModal, setShowDataModal] = useState(null);
  return (
    <ModalDataContext.Provider value={{ showDataModal, setShowDataModal }}>
      {children}
    </ModalDataContext.Provider>
  );
};
