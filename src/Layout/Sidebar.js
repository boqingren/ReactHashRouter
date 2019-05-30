import React from "react";

export default props => {
    const { children } = props;

    return (
        <ul className="nav nav-stacked">
            {Array.isArray(children)? children.map((item, index) => (
                <li key={index} style={{ cursor: "pointer" }}>{item}</li>
            )): null}
        </ul>
    );
};