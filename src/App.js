import React from "react";
import { HashRouter, Route } from "./HashRouter"
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import User from "./Component/User";

export default props => {
    return (
        <div>
            <Navigation>
                <a>Home</a>
                <a>Profile</a>
                <a>User</a>
            </Navigation>
            <HashRouter>
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/user" component={User} />
            </HashRouter>
        </div>
    );
};