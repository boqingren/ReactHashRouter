import React, { Fragment, useContext } from "react";
import ReduxContext from "../Store/ReduxContext";

export default props => {
    const { state } = useContext(ReduxContext);
    const { userList } = state;
    
    return (
        <div>
            {(Array.isArray(userList)? userList: []).map(item => (
                <Fragment>
                    <div>{`id: ${item.id}；`}</div>
                    <div>{`username: ${item.username}；`}</div>
                    <div>{`nickname: ${item.nickname}；`}</div>
                    <div>{`password: ${item.password}；`}</div>
                    <hr />
                </Fragment>
            ))}
        </div>
    );
};