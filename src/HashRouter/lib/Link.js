import React, { useContext } from "react";
import HashContext from "./HashContext";

export default props => {
    const hashState = useContext(HashContext);
    const { push } = hashState.history;

    return <a onClick={() => push(props.to)}>{props.children}</a>;
};