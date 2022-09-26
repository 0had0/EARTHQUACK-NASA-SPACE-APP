import {createContext, useReducer} from "react";

export const GlobContext = createContext(null);

const initialState = [
    {label: 'toggle pinpoints', value: false}
];

const reducer = (state = initialState, action) => {
    const newState = [...state];
    if (action.index+1) newState[action.index].value = action.payload;
    return newState
}


export const GlobProvider = ({children}) => {
    const [options, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobContext.Provider value={{options, dispatch}}>
            {children}
        </GlobContext.Provider>
    )
}