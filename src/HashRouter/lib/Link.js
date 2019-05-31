import React, { useContext } from "react";
import HashContext from "./HashContext";

export default props => {
    const hashState = useContext(HashContext);
    const { push } = hashState.history;
    const { to, children, ...rest } = props;

    return <a onClick={() => push(to)} {...rest}>{children}</a>;
};