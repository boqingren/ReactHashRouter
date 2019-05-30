import React, { useContext } from "react";
import HashContext from "./HashContext";

export default props => {
    const contextValue = useContext(HashContext);
    const { pathname } = contextValue.location;
    console.log(`pathname: ${pathname}`);
    const { path, component: Component } = props;
    console.log(`pathname === path: ${pathname === path}`);
    return (
        <div>
            {pathname === path? <Component />: null}
        </div>
    );
};