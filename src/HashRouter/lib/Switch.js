import { useContext } from "react";
import pathToRegexp from "path-to-regexp";
import HashContext from "./HashContext";

export default props => {
    const hashState = useContext(HashContext);
    const { pathname } = hashState.location;                    // pathname is window.location.pathname
    const { children } = props;
    const list = Array.isArray(children)? children: [];
    const [ Component = null ] = list.filter(itme => {          // 解构数组第一项，如果数组第一项为 undefined，则使第一项的值为默认值 null
        const { path = "" }  = itme.props;                      // <Redirect /> 没有 path 属性
        const regexp = pathToRegexp(path, [], { end: false });  // 根据 <Route /> 传进来的的 path 生成一个正则表达式，"end: false" 表示模糊匹配，"end: true" 表示精确匹配
        return regexp.test(pathname);
    });
    
    return Component;
};