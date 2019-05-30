import { useState } from "react";

export default count => {
    const initState = count => count >= 1? [true, ...Array(count -1).fill(false)]: [];
    const [list, setList] = useState(initState(count));
    
    return {
        actives: list,
        setActives: idx => setList(list.map((item, index) => {
            return idx === index? true: false;
        }))
    };
};