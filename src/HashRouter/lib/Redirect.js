import { useContext } from "react";
import HashContext from "./HashContext";

export default props => {
    const hashState = useContext(HashContext);
    const { push } = hashState.history;
    push(props.to);

    return null;
};