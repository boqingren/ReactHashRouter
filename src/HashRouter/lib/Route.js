import React, { useContext } from "react";
import pathToRegexp from "path-to-regexp";
import HashContext from "./HashContext";

export default props => {
    const hashState = useContext(HashContext);
    const { pathname } = hashState.location;                        // pathname is window.location.pathname
    const { path, component: Component, exact = false } = props;    // <Route path="/home" component={Home} />
    const regexp = pathToRegexp(path, [], { end: exact });          // 根据 <Route /> 传进来的的 path 生成一个正则表达式，"end: false" 表示模糊匹配，"end: true" 表示精确匹配
    return (
        <div>
            {regexp.test(pathname)? <Component />: null}
        </div>
    );
};