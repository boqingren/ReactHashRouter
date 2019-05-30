import React, { useState } from "react";

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
    const [userInfo, setUserInfo] = useState({
        username: "",
        nickname: "",
        password: ""
    });

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`userInfo: ${JSON.stringify(userInfo)}`);
        const hasEmpty = Object.values(userInfo).some(item => "" === item);
        if(!hasEmpty) props.history.push("/user/list");
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(userInfo).map((item => renderFormGroup(item, userInfo, setUserInfo)))}
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
};