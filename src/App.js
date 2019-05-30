import React from "react";
import { HashRouter, Route, Link } from "./HashRouter"
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import User from "./Component/User";

export default props => {
    return (
        <div>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/user">User</Link>
            </Navigation>
            <HashRouter>
                <div>
                    <Route path="/home" exact={true} component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/user" component={User} />
                </div>
            </HashRouter>
        </div>
    );
};