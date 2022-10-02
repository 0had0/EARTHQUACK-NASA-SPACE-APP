import {createContext, useReducer} from "react";

export const GlobContext = createContext(null);

const initialState = [
    {label: 'toggle Apollo landmarks', value: true},
    {label: 'toggle Luna landmarks', value: true},
    {label: 'toggle Change landmarks', value: true},
    {label: 'toggle Artificial Impact Arrivals', value: false},
    {label: 'toggle Deep moon quakes', value: false},
    {label: 'toggle Shallow moon quakes', value: false},
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
