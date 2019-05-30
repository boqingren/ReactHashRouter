import React from "react";
import classnames from "classnames";
import useActive from "../Hooks/useActive";

const Li = props => {
    const { isActive, ...restProps } = props;

    return (
        <li
            {...restProps}
            role="presentation"
            style={{ cursor: "pointer" }}
            className={classnames({"active": isActive})}
        >
            {props.children}
        </li>
    );
};

export default props => {
    const { children } = props;
    const count = (Array.isArray(children)? children: []).length;
    // const count = children.length;
    const { actives, setActives } = useActive(count);

    return (
        <div className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-heading">
                    <div className="navbar-brand">
                        React Hash Router !
                    </div>
                </div>
                <ul className="nav navbar-nav">
                    {Array.isArray(children)? children.map((item, index) => (
                        <Li key={index} isActive={actives[index]} onClick={() => setActives(index)}>
                            {item}
                        </Li>
                    )): null}
                </ul>
            </div>
        </div>
    );
};