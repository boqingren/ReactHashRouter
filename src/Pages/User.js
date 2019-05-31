import React from "react";
import { Route, Link, Switch } from "../HashRouter"
import Sidebar from "../Layout/Sidebar";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

export default props => {
    return (
        <div>
            <div className="col-md-2">
                <Sidebar>
                    <Link to="/user/add">UserAdd</Link>
                    <Link to="/user/list">UserList</Link>
                </Sidebar>
            </div>
            <div className="col-md-10">
                <Route path="/user/add" exact={true} component={UserAdd} />
                <Route path="/user/list" component={UserList} />
                <Route path="/user/details/:id" component={UserDetails} />
            </div>
        </div>
    );
};