import React, { useContext } from "react";
import pathToRegexp from "path-to-regexp";
import HashContext from "./HashContext";

export default props => {
    const hashState = useContext(HashContext);
    const { pathname } = hashState.location;                                // pathname is window.location.pathname
    const { path, component: Component, exact = false } = props;            // <Route path="/home" component={Home} />

    let keys = [];                                                          // keys 是一个数组，用于接收 pathToRegexp 分析形如 "/user/details/:id" 这种带参数的 path 的信息
    const regexp = pathToRegexp(path, keys, { end: exact });                // 根据 <Route /> 传进来的的 path 生成一个正则表达式，"end: false" 表示模糊匹配，"end: true" 表示精确匹配
    keys = keys.map(item => item.name);                                     // 获取路由参数的占位符名称数组
    
    const matchResult = pathname.match(regexp);                             // 看当前的路径是否匹配正则，匹配成功 matchResult 有值
    const [url, ...values] = Array.isArray(matchResult)? matchResult: [];   // 从匹配路由的结果里获取 path 传入的参数 values

    const componentProps = {
        location: hashState.location,
        history: hashState.history,
        match: {
            params: keys.reduce((obj, key, index) => {
                obj[key] = values[index];
                return obj;
            }, {})
        }
    };
    
    return matchResult? <Component {...componentProps}/>: null;
};