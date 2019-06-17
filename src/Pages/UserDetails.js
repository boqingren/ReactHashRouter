import React, { useContext } from "react";
import ReduxContext from "../Store/ReduxContext";
import Exception from "../Exception";

export default props => {
    const { state } = useContext(ReduxContext);
    const { userList } = state;
    const { params } = props.match;
    const list = Array.isArray(userList)? userList: [];
    const [ uesr = {} ] = list.filter(item => parseInt(params.id) === item.id);

    const handleClick = event => {
        Exception.runInTryCatch(() => {
            throw new Exception({
                type: Exception.envError.val,
                name: Exception.envError.name,
                desc: "测试能不能捕获异常！",
                data: { a: 1, b: 2 },
                callback: data => {
                    console.log(data);
                }
            });
        });
    };

    return (
        <div>
            <div onClick={handleClick}>id: {uesr.id}</div>
            <div>username: {uesr.username}</div>
            <div>nickname: {uesr.nickname}</div>
            <div>password: {uesr.password}</div>
        </div>
    );
};