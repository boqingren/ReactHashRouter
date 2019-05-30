import React, { useState, useEffect } from "react";
import HashContext from "./HashContext";

const getHash = start => window.location.hash.slice(start) || "/";

export default props => {
    const [hashState, setHashState] = useState({
        location: {
            pathname: getHash(1)                // 去掉 hash 里的 "#"
        },
        history: {
            push: to => {
                window.location.hash = to;
            }
        }
    });

    useEffect(() => {                           // useEffect 第二个参数为 [] 相当于 componentDidMount
        window.location.hash = getHash();       // 默认没有 hash 跳转到 "/"
        window.onhashchange = () => {           // 监听 hash 值的变化
            setHashState({
                ...hashState,
                location: {
                    ...hashState.location,
                    pathname: getHash(1)
                }
            });
        };
    }, []);

    return (
        <HashContext.Provider value={hashState}>
            {props.children}
        </HashContext.Provider>
    );
};