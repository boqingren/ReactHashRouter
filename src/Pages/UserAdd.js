import React, { useState, useContext } from "react";
import ReduxContext from "../Store/ReduxContext";
import { setUserList } from "../Store/action";

const renderFormGroup = (flag, userInfo, setUserInfo) => {
    const handleChange = (event, flag) => {
        setUserInfo({
            ...userInfo,
            [flag]: event.target.value
        });
    };

    return typeof flag === "string" && flag.length > 0? (
        <div key={flag} className="form-group">
            <label for={flag}>
                {flag.replace(flag[0], flag[0].toUpperCase())}
            </label>
            <input
                id={flag}
                name={flag}
                type="text"
                className="form-control"
                value={userInfo[flag]}
                onChange={event => handleChange(event, flag)}
            />
        </div>
    ): null;
};

export default props => {
    const { state, dispatch } = useContext(ReduxContext);
    const [userInfo, setUserInfo] = useState({
        username: "",
        nickname: "",
        password: ""
    });

    const handleSubmit = (event, { userList }) => {
        event.preventDefault();
        const len = (Array.isArray(userList)? userList: []).length;
        if(Object.values(userInfo).every(item => "" !== item)) {
            dispatch(setUserList({
                id: len + 1,
                ...userInfo
            }));
            props.history.push("/user/list");
        };
    };

    return (
        <form onSubmit={event => handleSubmit(event, state)}>
            {Object.keys(userInfo).map((item => renderFormGroup(item, userInfo, setUserInfo)))}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};