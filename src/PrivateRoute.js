import React from "react";
import {Redirect, Route} from "react-router-dom";

function PrivateRoute ({path, component}){

    const isAuthenticated = !!localStorage.getItem("token");

    if (!isAuthenticated) return <Redirect to={"/"}/>;

    return <Route path={path} component={component} />;
};

export default PrivateRoute