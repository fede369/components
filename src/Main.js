import React, { useEffect } from "react";
import LogIn from './elements/LogIn';
import SignIn from './elements/SignIn';
import ResetPassword from './elements/resetPassword';

import { Switch, Route } from "react-router-dom";

export default function Main() {

    return (
        <Switch>
            <Route exact path="/" component={SignIn}></Route>
            <Route exact path="/login" component={LogIn}></Route>
            <Route exact path="/resetpassword" component={ResetPassword}></Route>
        </Switch>

    );
}
