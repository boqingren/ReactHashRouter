import React, { useReducer } from "react";
import ReduxContext from "./ReduxContext";
import initState from "./initState";
import reducer from "./reducer";

export default props => {
    const [state, dispatch] = useReducer(reducer, initState);
    
    return (
        <ReduxContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ReduxContext.Provider>
    );
};