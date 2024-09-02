import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [state, setState] = useState('initial state');

    const sharedFunction = () => {
        console.log('Shared Function');
    };

    return (
        <MyContext.Provider value={{ state, setState, sharedFunction }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);
