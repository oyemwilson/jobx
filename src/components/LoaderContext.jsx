import React, { createContext, useContext, useState } from 'react';

// Create Loader Context
const LoaderContext = createContext();

// Custom hook to access loader context
export const useLoader = () => useContext(LoaderContext);

// Loader Provider to wrap the app
export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
