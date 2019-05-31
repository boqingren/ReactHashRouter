import React, { useContext } from "react";
import ReduxContext from "../Store/ReduxContext";

export default props => {
    const { state } = useContext(ReduxContext);
    const { userList } = state;
    const { params } = props.match;
    const list = Array.isArray(userList)? userList: [];
    const [ uesr ] = list.filter(item => parseInt(params.id) === item.id);

    return (
        <div>
            <div>id: {uesr.id}</div>
            <div>username: {uesr.username}</div>
            <div>nickname: {uesr.nickname}</div>
            <div>password: {uesr.password}</div>
        </div>
    );
};