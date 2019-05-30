import React, { useState, useEffect } from "react";
import HashContext from "./HashContext";

const getHash = start => window.location.hash.slice(start) || "/";

export default props => {
    const [location, setLocation] = useState({
        location: {
            pathname: getHash(1)                // 去掉 hash 里的 "#"
        }
    });

    useEffect(() => {                           // useEffect 第二个参数为 [] 相当于 componentDidMount
        window.location.hash = getHash();       // 默认没有 hash 跳转到 "/"
        window.onhashchange = () => {           // 监听 hash 值的变化
            setLocation({
                ...location,
                pathname: getHash()
            });
        };
    }, []);

    return (
        <HashContext.Provider value={location}>
            {props.children}
        </HashContext.Provider>
    );
};