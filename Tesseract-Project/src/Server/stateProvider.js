import React, {createContext, useContext, useReducer} from 'react';


// Preparing data layer
export const StateContext = createContext();

// Wrap component and Provide to Provider
export const StateProvider = ({reducer, initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);