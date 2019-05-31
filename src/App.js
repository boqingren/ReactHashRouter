import React from "react";
import { HashRouter, Route, Link, Redirect, Switch } from "./HashRouter"
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import User from "./Pages/User";
import NotFound from "./Pages/NotFound";

export default props => {
    return (
        <HashRouter>
            <div>
                <Navigation>
                    <Link to="/home">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/user">User</Link>
                </Navigation>
                <div className="container">
                    <Switch>
                        <Route path="/home" exact={true} component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/user" component={User} />
                        <Route path="/404" component={NotFound} />
                        {/* <Redirect to="/404" /> */}
                    </Switch>
                </div>
            </div>
        </HashRouter>
    );
};