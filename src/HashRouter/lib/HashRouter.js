import React from "react";
import HashContext from "./HashContext";

export default props => {
    return (
        <HashContext.Provider value={{a: 1}}>
            {props.children}
        </HashContext.Provider>
    );
};