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
            new Promise((resolve, reject) => {
                throw new Exception({
                    name: "测试",
                });
                // const num = 100;
                // const len = num.length();
            }).catch(error => {
                console.log("error instanceof TypeError: ", error instanceof TypeError);
                throw new Exception({
                    type: Exception.envError.val,
                    name: error.name || Exception.envError.name,
                    desc: error.message || "测试能不能捕获异常！",
                    data: { a: 1, b: 2 },
                    callback: data => {
                        console.log(data);
                    }
                });
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