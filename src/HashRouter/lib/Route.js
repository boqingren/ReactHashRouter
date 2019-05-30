import React, { Fragment, useContext } from "react";
import HashContext from "./HashContext";

export default props => {
    const value = useContext(HashContext);
    console.log(`useContext(HashContext): ${JSON.stringify(value)}`)
    return (
        <Fragment>
            {props.children}
        </Fragment>
    );
};