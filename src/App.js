import React from "react";
import { HashRouter, Route, Link, Redirect, Switch } from "./HashRouter"
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import User from "./Component/User";
import NotFound from "./Component/NotFound";

export default props => (
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
                    <Redirect to="/404" />
                </Switch>
            </div>
        </div>
    </HashRouter>
);