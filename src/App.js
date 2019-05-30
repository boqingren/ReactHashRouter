import React from "react";
import Navigation from "./Component/Navigation";

export default props => {
    return (
        <div>
            <Navigation>
                <a>Home</a>
                <a>Profile</a>
                <a>Messages</a>
            </Navigation>
        </div>
    );
};